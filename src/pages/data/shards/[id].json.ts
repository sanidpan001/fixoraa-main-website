// Build-time search-index shards (added 2026-11-06, main-site speed fix).
// One static JSON file per shard at /data/shards/<id>.json, generated from
// src/data/tools.ts during `astro build`. Each shard is an array of tuples:
// [name, slug, url, blurb, nicheSlug, added, ordinalInAllTools].
import type { APIRoute, GetStaticPaths } from 'astro';
import { getShardMap } from '../../../lib/tools-data';

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () =>
  [...getShardMap().keys()].map((id) => ({ params: { id } }));

export const GET: APIRoute = ({ params }) =>
  new Response(JSON.stringify(getShardMap().get(params.id ?? '') ?? []), {
    headers: { 'Content-Type': 'application/json' },
  });
