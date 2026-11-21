// ─────────────────────────────────────────────────────────────────────────
//  Build-time tool-data plumbing (added 2026-11-06, main-site speed fix;
//  extended 2026-11-20 for the 700k rollout: shard files + sub-categories).
//
//  The site's dataset is MERGED at build time from two sources:
//    1. src/data/tools.ts — the classic hand-maintained list (52,760 tools
//       at the time of the rollout). It is NOT modified by the rollout.
//    2. src/data/shards/*.json — one JSON file per deployed hosting tree,
//       added by the listing pipeline (contract: LISTING-FORMAT.md in the
//       700k job folder). Entry shape:
//         { name, slug, url, blurb, category, subcategory, added }
//       where `category` is a taxonomy parent name (Converters, Finance,
//       Study, Health, Dev, Text, Time, Fun, Image, PDF) and `added` is
//       the listing date (YYYY-MM-DD) driving the ✨ New freshness rule.
//
//  Everything the pages need is derived from the merged set:
//    • totals/counts (merged — never the legacy count alone)
//    • /tools/<collection>/ shells (first 100 server-rendered, the rest
//      loads client-side from the search shards — see CollectionShell)
//    • paginated sub-category listings under /categories/<cat>/<sub>/
//    • compact search-index shards, emitted as static JSON by the
//      endpoints in src/pages/data/ and fetched lazily by the browser
//      (never baked into HTML)
// ─────────────────────────────────────────────────────────────────────────
import fs from 'node:fs';
import path from 'node:path';
import {
  niches as legacyNiches,
  newTools as legacyNewTools,
} from '../data/tools';

export const PAGE_SIZE = 100;

export interface LibTool {
  niche: string;
  nicheSlug: string;
  name: string;
  slug: string;
  url: string;
  blurb: string;
  added: string | null;
  category: string; // = niche display name
  subcategory: string; // display name, e.g. "Chemistry & Mole Converters"
  subSlug: string; // slugified subcategory, for URLs
}

/** URL slug for a sub-category display name. Must match LISTING-FORMAT.md. */
export const subcatSlug = (name: string): string =>
  name
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

// Taxonomy parent name (as used in shard files / category_map.json) →
// the site niche slug it belongs to.
const CATEGORY_TO_NICHE_SLUG: Record<string, string> = {
  Converters: 'converters',
  Finance: 'finance-calculators',
  Study: 'study-career',
  Health: 'health-fitness',
  Dev: 'developer-tools',
  Text: 'text-tools',
  Time: 'date-time',
  Fun: 'fun-lifestyle',
  Image: 'image-tools',
  PDF: 'pdf-tools',
};

// Display-name overrides (2026-11-21, Sandipan's order): the finance
// category shows as just "Finance" everywhere — chips, category pages,
// the search manifest, card tags — while its slug (finance-calculators)
// and every URL stay unchanged. The name in tools.ts is NOT edited (the
// legacy file stays untouched); the override lives here, in the data
// layer every page reads from.
const DISPLAY_NAME_OVERRIDES: Record<string, string> = {
  'finance-calculators': 'Finance',
};
const displayName = (n: { slug: string; name: string }): string =>
  DISPLAY_NAME_OVERRIDES[n.slug] ?? n.name;

// ── Shard loading ────────────────────────────────────────────────────────

interface ShardEntry {
  name: string;
  slug: string;
  url: string;
  blurb: string;
  category: string;
  subcategory: string;
  added?: string;
}

function loadShardEntries(): ShardEntry[] {
  const dir = path.join(process.cwd(), 'src', 'data', 'shards');
  if (!fs.existsSync(dir)) return [];
  const out: ShardEntry[] = [];
  for (const f of fs.readdirSync(dir).sort()) {
    if (!f.endsWith('.json')) continue;
    const parsed = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf-8'));
    const tools = Array.isArray(parsed) ? parsed : parsed?.tools;
    if (!Array.isArray(tools)) {
      throw new Error(`[tools-data] shard ${f}: expected { "tools": [...] }`);
    }
    out.push(...(tools as ShardEntry[]));
  }
  return out;
}

// ── The merged dataset ───────────────────────────────────────────────────

const nicheBySlug = new Map(legacyNiches.map((n) => [n.slug, n]));
const seenSlugs = new Set<string>();
const addedBySlug = new Map<string, string>();
const mergedAll: LibTool[] = [];

// 1) Legacy tools first — they win every slug conflict.
for (const n of legacyNiches) {
  const sub = `${n.name} — More Tools`;
  // The bucket's display name follows the override, but its URL slug is
  // still derived from the ORIGINAL name above — a rename must not move
  // the /categories/<cat>/<name>-more-tools/ URLs that already exist.
  const subDisplay = `${displayName(n)} — More Tools`;
  for (const t of n.tools) {
    if (seenSlugs.has(t.slug)) continue;
    seenSlugs.add(t.slug);
    const added = legacyNewTools[t.slug] ?? null;
    if (added) addedBySlug.set(t.slug, added);
    mergedAll.push({
      niche: displayName(n),
      nicheSlug: n.slug,
      name: t.name,
      slug: t.slug,
      url: t.url,
      blurb: t.blurb,
      added,
      category: displayName(n),
      subcategory: subDisplay,
      subSlug: subcatSlug(sub),
    });
  }
}

// 2) Shard tools (the 700k rollout). Duplicate slugs and unknown
//    categories are skipped with a build-log warning, never guessed.
let shardSkipped = 0;
for (const e of loadShardEntries()) {
  const nicheSlug =
    CATEGORY_TO_NICHE_SLUG[e.category] ??
    (nicheBySlug.has(e.category) ? e.category : null);
  if (!nicheSlug || seenSlugs.has(e.slug)) {
    shardSkipped++;
    continue;
  }
  const n = nicheBySlug.get(nicheSlug)!;
  seenSlugs.add(e.slug);
  const added = e.added ?? null;
  if (added) addedBySlug.set(e.slug, added);
  mergedAll.push({
    niche: displayName(n),
    nicheSlug,
    name: e.name,
    slug: e.slug,
    url: e.url,
    blurb: e.blurb,
    added,
    category: displayName(n),
    subcategory: e.subcategory,
    subSlug: subcatSlug(e.subcategory),
  });
}
if (shardSkipped > 0) {
  console.warn(
    `[tools-data] skipped ${shardSkipped} shard entries (duplicate slug or unknown category)`
  );
}

/** The 10 site categories, each with its MERGED tools array. */
export const niches = legacyNiches.map((n) => ({
  name: displayName(n),
  slug: n.slug,
  tagline: n.tagline,
  tools: mergedAll
    .filter((t) => t.nicheSlug === n.slug)
    .map((t) => ({ name: t.name, slug: t.slug, url: t.url, blurb: t.blurb })),
}));

export const allTools: LibTool[] = mergedAll;
export const totalTools: number = mergedAll.length;
export const newTools: Record<string, string> =
  Object.fromEntries(addedBySlug);

/** Same freshness rule the site has always used: registered < 5 days ago. */
export function isFresh(slug: string, now: number = Date.now()): boolean {
  const d = addedBySlug.get(slug);
  if (!d) return false;
  const days = (now - new Date(d + 'T00:00:00').getTime()) / 86400000;
  return days >= 0 && days < 5;
}

export const isPlaceholderUrl = (url: string) =>
  url.includes('PASTE-YOUR-TOOL-URL-HERE');

/** All tools, name-sorted — the order /tools has always shown. */
export const sortedAll: LibTool[] = [...mergedAll].sort((a, b) =>
  a.name.localeCompare(b.name)
);

/** Fresh-at-build tools, newest first — the order the ✨ New view has always shown. */
export const freshTools: LibTool[] = mergedAll
  .filter((t) => t.added !== null && isFresh(t.slug))
  .sort(
    (a, b) =>
      (b.added || '').localeCompare(a.added || '') ||
      a.name.localeCompare(b.name)
  );

// ── /tools/<collection>/ shells ──────────────────────────────────────────
//
//  Scale note (2026-11-20): at ~805k tools, fully paginating the all /
//  new / per-category collections the old way would mean ~25,000 static
//  pages alongside the sub-category listings. These collections are now
//  SHELLS: page 1 is server-rendered with the first 100 tools, and the
//  rest loads client-side from the search shards (CollectionShell.astro).
//  Sub-category listings keep real server-side pagination.

export interface Collection {
  id: string; // route segment under /tools/
  kind: 'all' | 'new' | 'niche';
  title: string; // <h1> text (plain part)
  titleAccent?: string; // gradient part of the <h1>, if any
  tagline: string;
  tools: LibTool[]; // first PAGE_SIZE tools, server-rendered
  total: number; // full collection size
}

export function getCollections(): Collection[] {
  const cols: Collection[] = [
    {
      id: 'all',
      kind: 'all',
      title: 'Every tool, ',
      titleAccent: 'A–Z',
      tagline: 'The full Fixoraa directory in alphabetical order.',
      tools: sortedAll.slice(0, PAGE_SIZE),
      total: sortedAll.length,
    },
    {
      id: 'new',
      kind: 'new',
      title: '✨ New ',
      titleAccent: 'tools',
      tagline: 'Fresh additions from the last 5 days, newest first.',
      tools: freshTools.slice(0, PAGE_SIZE),
      total: freshTools.length,
    },
  ];
  for (const n of legacyNiches) {
    const tools = mergedAll
      .filter((t) => t.nicheSlug === n.slug)
      .sort((a, b) => a.name.localeCompare(b.name));
    cols.push({
      id: n.slug,
      kind: 'niche',
      title: displayName(n),
      tagline: n.tagline,
      tools: tools.slice(0, PAGE_SIZE),
      total: tools.length,
    });
  }
  return cols;
}

// ── Sub-categories ───────────────────────────────────────────────────────

export interface Subcategory {
  categorySlug: string; // niche slug of the parent category
  categoryName: string; // niche display name
  name: string; // sub-category display name
  slug: string; // sub-category URL slug
  tools: LibTool[]; // name-sorted
  count: number;
}

let subcatCache: Subcategory[] | null = null;

export function getSubcategories(): Subcategory[] {
  if (subcatCache) return subcatCache;
  const groups = new Map<string, Subcategory>();
  for (const t of mergedAll) {
    const key = `${t.nicheSlug}/${t.subSlug}`;
    let g = groups.get(key);
    if (!g) {
      g = {
        categorySlug: t.nicheSlug,
        categoryName: t.niche,
        name: t.subcategory,
        slug: t.subSlug,
        tools: [],
        count: 0,
      };
      groups.set(key, g);
    }
    g.tools.push(t);
  }
  const order = new Map(legacyNiches.map((n, i) => [n.slug, i]));
  const out = [...groups.values()];
  for (const g of out) {
    g.tools.sort((a, b) => a.name.localeCompare(b.name));
    g.count = g.tools.length;
  }
  out.sort(
    (a, b) =>
      (order.get(a.categorySlug) ?? 99) - (order.get(b.categorySlug) ?? 99) ||
      b.count - a.count ||
      a.name.localeCompare(b.name)
  );
  subcatCache = out;
  return out;
}

// ── Search-index shards ──────────────────────────────────────────────────
//
//  One tuple per tool:
//  [name, slug, url, blurb, nicheSlug, added, ordinal, subSlug, subcategory]
//  where `ordinal` is the tool's position in the master merged list, so
//  the browser can reproduce the site's long-standing result ordering
//  even though shards arrive in arbitrary order. (Tuples gained the two
//  sub-category fields at the END in 2026-11-20 — older readers that use
//  fixed indices 0–6 are unaffected.)

export type ShardTuple = [
  string,
  string,
  string,
  string,
  string,
  string | null,
  number,
  string,
  string
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
  // ordinal lookup (slug -> position in the merged list), built once
  const ord = new Map<string, number>();
  mergedAll.forEach((t, i) => ord.set(t.slug, i));
  const push = (id: string, t: LibTool) => {
    const arr = map.get(id) ?? [];
    arr.push([
      t.name,
      t.slug,
      t.url,
      t.blurb,
      t.nicheSlug,
      t.added,
      ord.get(t.slug) ?? 0,
      t.subSlug,
      t.subcategory,
    ]);
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
  for (const n of legacyNiches) {
    const tools = mergedAll.filter((t) => t.nicheSlug === n.slug);
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
    subcategories: { slug: string; name: string; count: number }[];
  }[];
  newShards: string[];
  allShardIds: string[];
}

let manifestCache: Manifest | null = null;

export function getManifest(): Manifest {
  if (manifestCache) return manifestCache;
  const shards = getShardMap();
  const subs = getSubcategories();
  const nicheInfos = legacyNiches.map((n) => {
    const ids = [...shards.keys()]
      .filter((id) => id === n.slug || id.startsWith(`${n.slug}-`))
      .sort();
    return {
      slug: n.slug,
      name: displayName(n),
      tagline: n.tagline,
      count: mergedAll.filter((t) => t.nicheSlug === n.slug).length,
      shards: ids,
      subcategories: subs
        .filter((s) => s.categorySlug === n.slug)
        .map((s) => ({ slug: s.slug, name: s.name, count: s.count })),
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
