// ─────────────────────────────────────────────────────────────────────────
//  Build-time tool-data plumbing (added 2026-11-06, main-site speed fix).
//
//  src/data/tools.ts stays the single source of truth and is NOT modified.
//  This module derives everything the restructured pages need from it:
//    • paginated collections for /tools/<collection>/ listing pages
//    • compact search-index shards, emitted as static JSON by the
//      endpoints in src/pages/data/ and fetched lazily by the browser
//      (never baked into HTML any more)
// ─────────────────────────────────────────────────────────────────────────
import { niches, allTools, totalTools, newTools } from '../data/tools';

export { niches, totalTools };

export const PAGE_SIZE = 100;

export interface LibTool {
  niche: string;
  nicheSlug: string;
  name: string;
  slug: string;
  url: string;
  blurb: string;
  added: string | null;
}

const withAdded: LibTool[] = allTools.map((t) => ({
  ...t,
  added: newTools[t.slug] ?? null,
}));

/** Same freshness rule the site has always used: registered < 5 days ago. */
export function isFresh(slug: string, now: number = Date.now()): boolean {
  const d = newTools[slug];
  if (!d) return false;
  const days = (now - new Date(d + 'T00:00:00').getTime()) / 86400000;
  return days >= 0 && days < 5;
}

export const isPlaceholderUrl = (url: string) =>
  url.includes('PASTE-YOUR-TOOL-URL-HERE');

/** All tools, name-sorted — the order /tools has always shown. */
export const sortedAll: LibTool[] = [...withAdded].sort((a, b) =>
  a.name.localeCompare(b.name)
);

/** Fresh-at-build tools, newest first — the order the ✨ New view has always shown. */
export const freshTools: LibTool[] = withAdded
  .filter((t) => isFresh(t.slug))
  .sort(
    (a, b) =>
      (b.added || '').localeCompare(a.added || '') ||
      a.name.localeCompare(b.name)
  );

// ── Paginated collections ────────────────────────────────────────────────

export interface Collection {
  id: string; // route segment under /tools/
  kind: 'all' | 'new' | 'niche';
  title: string; // <h1> text (plain part)
  titleAccent?: string; // gradient part of the <h1>, if any
  tagline: string;
  tools: LibTool[];
}

export function getCollections(): Collection[] {
  const cols: Collection[] = [
    {
      id: 'all',
      kind: 'all',
      title: 'Every tool, ',
      titleAccent: 'A–Z',
      tagline: 'The full Fixoraa directory in alphabetical order.',
      tools: sortedAll,
    },
    {
      id: 'new',
      kind: 'new',
      title: '✨ New ',
      titleAccent: 'tools',
      tagline: 'Fresh additions from the last 5 days, newest first.',
      tools: freshTools,
    },
  ];
  for (const n of niches) {
    cols.push({
      id: n.slug,
      kind: 'niche',
      title: n.name,
      tagline: n.tagline,
      tools: [...withAdded.filter((t) => t.nicheSlug === n.slug)].sort(
        (a, b) => a.name.localeCompare(b.name)
      ),
    });
  }
  return cols;
}

// ── Search-index shards ──────────────────────────────────────────────────
//
//  One tuple per tool: [name, slug, url, blurb, nicheSlug, added, ordinal]
//  where `ordinal` is the tool's position in the master `allTools` list, so
//  the browser can reproduce the site's long-standing result ordering even
//  though shards arrive in arbitrary order.

export type ShardTuple = [
  string,
  string,
  string,
  string,
  string,
  string | null,
  number
];

const SHARD_SPLIT_THRESHOLD = 2000;

const shardChar = (slug: string): string => {
  const c = slug.charAt(0).toLowerCase();
  return /[a-z0-9]/.test(c) ? c : 'x';
};

let shardCache: Map<string, ShardTuple[]> | null = null;

export function getShardMap(): Map<string, ShardTuple[]> {
  if (shardCache) return shardCache;
  const map = new Map<string, ShardTuple[]>();
  // ordinal lookup (slug -> position in allTools), built once
  const ord = new Map<string, number>();
  allTools.forEach((t, i) => ord.set(t.slug, i));
  const push = (id: string, t: LibTool) => {
    const arr = map.get(id) ?? [];
    arr.push([t.name, t.slug, t.url, t.blurb, t.nicheSlug, t.added, ord.get(t.slug) ?? 0]);
    map.set(id, arr);
  };
  // Big sets split by the slug's first letter; any letter group that is
  // still too large (dense initials like "m…") splits once more by the
  // first two letters, so no single shard grows past ~1 MB.
  const pushBig = (prefix: string, tools: LibTool[]) => {
    const byChar = new Map<string, LibTool[]>();
    for (const t of tools) {
      const id = `${prefix}-${shardChar(t.slug)}`;
      const arr = byChar.get(id) ?? [];
      arr.push(t);
      byChar.set(id, arr);
    }
    for (const [id, group] of byChar) {
      if (group.length <= 4000) {
        group.forEach((t) => push(id, t));
      } else {
        for (const t of group) {
          const c2 = t.slug.charAt(1).toLowerCase();
          push(`${id}${/[a-z0-9]/.test(c2) ? c2 : 'x'}`, t);
        }
      }
    }
  };
  for (const n of niches) {
    const tools = withAdded.filter((t) => t.nicheSlug === n.slug);
    if (tools.length <= SHARD_SPLIT_THRESHOLD) {
      tools.forEach((t) => push(n.slug, t));
    } else {
      pushBig(n.slug, tools);
    }
  }
  if (freshTools.length <= SHARD_SPLIT_THRESHOLD) {
    freshTools.forEach((t) => push('new', t));
  } else {
    pushBig('new', freshTools);
  }
  shardCache = map;
  return map;
}

export interface Manifest {
  total: number;
  newCount: number;
  niches: {
    slug: string;
    name: string;
    tagline: string;
    count: number;
    shards: string[];
  }[];
  newShards: string[];
  allShardIds: string[];
}

let manifestCache: Manifest | null = null;

export function getManifest(): Manifest {
  if (manifestCache) return manifestCache;
  const shards = getShardMap();
  const nicheInfos = niches.map((n) => {
    const ids = [...shards.keys()]
      .filter((id) => id === n.slug || id.startsWith(`${n.slug}-`))
      .sort();
    return {
      slug: n.slug,
      name: n.name,
      tagline: n.tagline,
      count: n.tools.length,
      shards: ids,
    };
  });
  const newShards = [...shards.keys()]
    .filter((id) => id === 'new' || id.startsWith('new-'))
    .sort();
  manifestCache = {
    total: totalTools,
    newCount: freshTools.length,
    niches: nicheInfos,
    newShards,
    allShardIds: nicheInfos.flatMap((n) => n.shards),
  };
  return manifestCache;
}
