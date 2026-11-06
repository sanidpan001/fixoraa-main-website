// Lazy tool-search index loader (added 2026-11-06, main-site speed fix).
//
// The full tool list used to be baked into the homepage and /tools HTML
// (12 MB and 67 MB pages). It now lives in static JSON shards under
// /data/shards/, generated at build time from src/data/tools.ts. This
// loader fetches the manifest + shards ONLY on first search interaction,
// calling onProgress(tools) after every shard so results can render
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
    t.niche.toLowerCase().includes(q)
  );
}
