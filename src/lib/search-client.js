// Lazy tool-search index loader (added 2026-11-06, main-site speed fix;
// tuples gained sub-category fields 2026-11-20).
//
// The full tool list used to be baked into the homepage and /tools HTML
// (12 MB and 67 MB pages). It now lives in static JSON shards under
// /data/shards/, generated at build time from the merged dataset
// (src/data/tools.ts + src/data/shards/*.json). This loader fetches the
// manifest + shards ONLY on first search interaction, calling
// onProgress(tools) after every shard so results can render
// progressively while the rest are still downloading.

let cache = null;

export function loadToolIndex(onProgress) {
  if (cache) {
    if (onProgress) onProgress(cache.tools);
    return cache.promise;
  }
  const tools = [];
  const promise = (async () => {
    try {
      const res = await fetch('/data/index.json');
      const manifest = await res.json();
      const nameBySlug = {};
      manifest.niches.forEach((n) => {
        nameBySlug[n.slug] = n.name;
      });
      await Promise.all(
        manifest.allShardIds.map(async (id) => {
          try {
            const r = await fetch('/data/shards/' + id + '.json');
            const rows = await r.json();
            for (const t of rows) {
              tools.push({
                name: t[0],
                slug: t[1],
                url: t[2],
                blurb: t[3],
                nicheSlug: t[4],
                added: t[5],
                ord: t[6],
                subSlug: t[7] || '',
                subcategory: t[8] || '',
                niche: nameBySlug[t[4]] || '',
              });
            }
            if (onProgress) onProgress(tools);
          } catch (e) {
            /* one failed shard must not break search */
          }
        })
      );
    } catch (e) {
      /* index unavailable — search simply shows nothing */
    }
    return tools;
  })();
  cache = { tools, promise };
  return promise;
}

/** The match rule the site's search boxes have always used. */
export function toolMatches(t, q) {
  return (
    t.name.toLowerCase().includes(q) ||
    t.blurb.toLowerCase().includes(q) ||
    t.niche.toLowerCase().includes(q) ||
    (t.subcategory || '').toLowerCase().includes(q)
  );
}

/* ---------- ranked search (2026-11-22) ----------
   The old rule matched the visitor's whole typed string as one
   substring, so multi-word queries ("emi calculator", "merge pdf")
   only matched tools containing that exact phrase, and results came
   back in raw index order — the combinatorial calculator flood buried
   the real tools. searchTools tokenises the query (English + common
   Hinglish filler words dropped), matches word-by-word against tool
   names with light stemming, scores, and orders by score, breaking
   ties by the curated `ord` so hand-built tools surface first. */

const SEARCH_STOP = new Set(
  'the a an to of for me my i want need hai hain karna karo karni mujhe mera meri ek do please tool tools online free ka ki ke se aur or and in on ko wala wali liye batao dikhao chahiye kahan kaise bhi'.split(' ')
);
function sWords(s) {
  return (String(s || '').toLowerCase().match(/[a-z0-9]+/g) || []);
}
// Word match: exact; or one word is a prefix of the other with the
// shorter word at least 4 letters (loan~loans, merge~merger); or —
// for words of 5+ letters whose lengths differ by at most 3 — they
// share a prefix at most one letter short of the shorter word
// (merge~merging, calculate~calculation). Never a loose substring,
// so "emi" can no longer match "reminding", nor "calculator" "call".
function sWm(q, w) {
  if (q === w) return true;
  const m = Math.min(q.length, w.length);
  if (m < 4) return false;
  if (q.startsWith(w) || w.startsWith(q)) return true;
  if (m >= 5 && Math.abs(q.length - w.length) <= 3) {
    let i = 0;
    while (i < m && q[i] === w[i]) i++;
    return i >= m - 1;
  }
  return false;
}
let sCache = { arr: null, nw: [], sw: [], df: new Map() };
function sExtendCache(tools) {
  if (sCache.arr !== tools) sCache = { arr: tools, nw: [], sw: [], df: new Map() };
  for (let i = sCache.nw.length; i < tools.length; i++) {
    const nw = sWords(tools[i].name);
    sCache.nw.push(nw);
    sCache.sw.push(sWords(tools[i].subcategory || ''));
    for (const w of new Set(nw)) sCache.df.set(w, (sCache.df.get(w) || 0) + 1);
  }
}
// Rarity weight of a name word: rare words (emi, merge) say far more
// about intent than common ones (calculator, age) that appear in
// hundreds of thousands of generated tool names.
function sIdf(word, total) {
  const df = sCache.df.get(word) || 0;
  if (!df) return 0;
  return Math.log(1 + total / df);
}
function sBestHitIdf(q, words, total) {
  let best = 0;
  for (const w of words) {
    if (sWm(q, w)) {
      const v = sIdf(w, total);
      if (v > best) best = v;
    }
  }
  return best;
}

export function searchTools(tools, rawQuery, limit) {
  const cap = limit || 8;
  const phrase = String(rawQuery || '').toLowerCase().trim().replace(/\s+/g, ' ');
  const qw = [...new Set(sWords(phrase).filter((w) => w.length >= 2 && !SEARCH_STOP.has(w)))].slice(0, 6);
  if (!tools || !tools.length || !qw.length || phrase.length < 2) {
    return { list: [], total: 0 };
  }
  sExtendCache(tools);
  const totalTools = tools.length;
  const scored = [];
  for (let i = 0; i < tools.length; i++) {
    const t = tools[i];
    const nw = sCache.nw[i];
    const sw = sCache.sw[i];
    let nameScore = 0;
    let nameHits = 0;
    for (const q of qw) {
      const v = sBestHitIdf(q, nw, totalTools);
      if (v > 0) {
        nameScore += v;
        nameHits++;
      }
    }
    let subScore = 0;
    let subHits = 0;
    for (const q of qw) {
      const v = sBestHitIdf(q, sw, totalTools);
      if (v > 0) {
        subScore += v;
        subHits++;
      }
    }
    let s = nameScore * 2 + subScore * 0.8;
    if (qw.length > 1 && nameHits === qw.length) s += nameScore;
    if (phrase.length >= 4 && t.name.toLowerCase().includes(phrase)) s += 20;
    if (nameHits === 0 && subHits === 0) {
      // No name/subcategory match: the description can still save the
      // tool (brand-named converters like PngPro are only findable
      // this way), but it always ranks below real name matches.
      const bl = (t.blurb || '').toLowerCase();
      if (phrase.length >= 4 && bl.includes(phrase)) {
        s += 12;
      } else {
        let potential = 0;
        for (const q of qw) {
          if (q.length >= 4 ? bl.includes(q.slice(0, 4)) : bl.includes(q)) potential++;
        }
        if (potential >= (qw.length > 1 ? 2 : 1)) {
          const bw = sWords(bl);
          let hits = 0;
          for (const q of qw) if (bw.some((w) => sWm(q, w))) hits++;
          if (hits >= (qw.length > 1 ? 2 : 1)) s += Math.min(3, hits);
          else continue;
        } else {
          continue;
        }
      }
    }
    if (s > 0) scored.push([s, t]);
  }
  scored.sort((a, b) => b[0] - a[0] || (a[1].ord || 0) - (b[1].ord || 0));
  const total = scored.length;
  let list;
  if (cap <= 24) {
    // Homepage dropdown: at most 3 results per sub-category so one
    // calculator family cannot fill the whole list; backfill after.
    list = [];
    const perSub = {};
    const rest = [];
    for (const [, t] of scored) {
      const k = t.subcategory || '';
      perSub[k] = perSub[k] || 0;
      if (perSub[k] < 3 && list.length < cap) {
        perSub[k]++;
        list.push(t);
      } else {
        rest.push(t);
      }
    }
    for (const t of rest) {
      if (list.length >= cap) break;
      list.push(t);
    }
  } else {
    list = scored.slice(0, cap).map(([, t]) => t);
  }
  return { list, total };
}
