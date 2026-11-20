# Listing shards — read me

This folder holds one JSON file per deployed hosting tree, added by the
700k-rollout listing pipeline. `src/lib/tools-data.ts` merges every
`*.json` file here with `src/data/tools.ts` at build time; the merged
set drives the site's totals, search index, collection shells and the
sub-category listings under `/categories/<category>/<subcategory>/`.

## File naming

`src/data/shards/<host>.json` — one file per hosting tree, named after
the tree's subdomain label (e.g. `convert5.json`, `convert6.json`,
`fun2.json`). One file = one listing commit. Never edit another tree's
file; never put a tool in two files.

## Schema

```json
{
  "shard": "convert5",
  "tools": [
    {
      "name": "Acetic Acid Grams To Moles",
      "slug": "aceticacidgramstomoles",
      "url": "https://convert5.fixoraa.tech/aceticacidgramstomoles/",
      "blurb": "Convert acetic acid grams to moles instantly — free online converter, no signup.",
      "category": "Converters",
      "subcategory": "Chemistry & Mole Converters",
      "added": "2026-11-20"
    }
  ]
}
```

- `category`: a taxonomy parent name — exactly one of `Converters`,
  `Finance`, `Study`, `Health`, `Dev`, `Text`, `Time`, `Fun`, `Image`,
  `PDF` (copied verbatim from `category_map.json`). The site maps it to
  the niche slug; unknown values are skipped at build.
- `subcategory`: the taxonomy sub-category display name, verbatim. Its
  URL slug is derived by the site (lowercase, `&` → `and`, runs of
  non-alphanumerics → `-`).
- `added`: the listing date `YYYY-MM-DD`; drives the ✨ New badge and
  the /tools/new/ view for 5 days, exactly like the `newTools` registry
  in tools.ts.
- `slug` must be unique across tools.ts and all shard files — a
  duplicate is skipped at build (the earlier source wins).

The full pipeline contract (commit procedure, verification totals) is
`LISTING-FORMAT.md` in the 700k job folder
(`~/workspace/zip-tools-2026-11-20-700k/`).
