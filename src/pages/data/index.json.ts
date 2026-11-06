// Build-time search-index manifest (added 2026-11-06, main-site speed fix).
// Emitted as a static file at /data/index.json — the browser fetches it
// lazily the first time a visitor uses search. Never embedded in HTML.
import type { APIRoute } from 'astro';
import { getManifest } from '../../lib/tools-data';

export const prerender = true;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(getManifest()), {
    headers: { 'Content-Type': 'application/json' },
  });
