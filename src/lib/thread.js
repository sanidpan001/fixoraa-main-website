/* ============================================================
   Thread drawing effect — sewing-needle cursor interaction.
   (Inspired by designers-machines.com: press = needle pin,
   the cursor drags a live thread that drapes with gravity.)

   - Full-viewport FIXED canvas, pointer-events:none, z-index 90
   - Verlet rope per thread: 60 pts, gravity 0.5px/f², damping 0.985,
     30 constraint iterations. Pin[0] at anchor; pin[last] at the
     cursor (live) or 2nd pin (completed). Live rest = 1.6x
     anchor<->cursor (min 120px); completed rest = 1.5x pin<->pin.
   - Coral stroke (#FF5A5F, 2px, round), dark pin dots (r 3.5).
   - Threads never fade; max ~12 completed (oldest dropped).
   - Scroll >100px fades out + clears all threads (viewport space).
   - Single rAF loop; skips when tab hidden; ropes sleep when settled.
   - Listeners on window; NEVER preventDefault — page stays usable.
   - JS-only setup; callers must skip when prefers-reduced-motion.
   ============================================================ */

import { sfx } from './sfx.js';

const THREAD_COLOR = '#FF5A5F';
const PIN_COLOR = '#1a1a1a';
const PIN_R = 3.5;
const N_POINTS = 60;
const GRAVITY = 0.5; // px per frame^2 @60fps
const DAMPING = 0.985;
const ITERATIONS = 30;
const LIVE_SLACK = 1.6;
const LIVE_MIN_REST = 120;
const DONE_SLACK = 1.5;
const MAX_THREADS = 12;
const CLICK_TOL = 6; // px — below this a press counts as a simple click
const SCROLL_CLEAR_Y = 100;
const Z_INDEX = 90;
const SLEEP_VEL = 0.05;
const SLEEP_FRAMES = 60;

export function initThread() {
  if (typeof window === 'undefined') return;

  // ── Canvas ──
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  canvas.style.cssText =
    'position:fixed;inset:0;width:100vw;height:100vh;' +
    'pointer-events:none;z-index:' + Z_INDEX + ';';
  document.body.appendChild(canvas);
  const g = canvas.getContext('2d');

  function fit() {
    canvas.width = Math.max(1, Math.round(window.innerWidth * dpr));
    canvas.height = Math.max(1, Math.round(window.innerHeight * dpr));
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  fit();

  // ── State ──
  const cursor = { x: -9999, y: -9999 };
  let threads = []; // completed (persist forever until scroll-clear)
  let live = null; // at most one live thread
  let rafId = 0;
  let stillFrames = 0;
  let clearing = false;
  let downPos = null;
  let downMoved = false;

  // ── Rope construction ──
  function makePoints(ax, ay, bx, by) {
    const pts = [];
    for (let i = 0; i < N_POINTS; i++) {
      const t = i / (N_POINTS - 1);
      const x = ax + (bx - ax) * t;
      const y = ay + (by - ay) * t;
      pts.push({ x, y, px: x, py: y });
    }
    return pts;
  }

  function newLive(ax, ay) {
    return { pts: makePoints(ax, ay, cursor.x, cursor.y), ax, ay, live: true, pin2: null, rest: LIVE_MIN_REST };
  }

  function liveRest(t) {
    const d = Math.hypot(cursor.x - t.ax, cursor.y - t.ay);
    return Math.max(LIVE_MIN_REST, d * LIVE_SLACK);
  }

  function completeLive(t, px, py) {
    t.live = false;
    t.pin2 = { x: px, y: py };
    const d = Math.hypot(px - t.ax, py - t.ay);
    t.rest = Math.max(1, d * DONE_SLACK);
    threads.push(t);
    while (threads.length > MAX_THREADS) threads.shift(); // drop oldest
  }

  // ── Verlet step ──
  function step(t) {
    const pts = t.pts;
    const n = pts.length;
    // Pin the ends (zero their velocity too)
    const p0 = pts[0];
    p0.x = t.ax; p0.y = t.ay; p0.px = t.ax; p0.py = t.ay;
    const pN = pts[n - 1];
    const ex = t.live ? cursor.x : t.pin2.x;
    const ey = t.live ? cursor.y : t.pin2.y;
    pN.x = ex; pN.y = ey; pN.px = ex; pN.py = ey;

    if (t.live) t.rest = liveRest(t);
    const seg = t.rest / (n - 1);

    for (let i = 1; i < n - 1; i++) {
      const p = pts[i];
      const nx = p.x + (p.x - p.px) * DAMPING;
      const ny = p.y + (p.y - p.py) * DAMPING + GRAVITY;
      p.px = p.x; p.py = p.y; p.x = nx; p.y = ny;
    }

    for (let k = 0; k < ITERATIONS; k++) {
      for (let i = 0; i < n - 1; i++) {
        const a = pts[i], b = pts[i + 1];
        const aPin = i === 0;
        const bPin = i + 1 === n - 1;
        const dx = b.x - a.x, dy = b.y - a.y;
        const d = Math.hypot(dx, dy);
        if (d < 1e-6) continue;
        const diff = (d - seg) / d;
        if (!aPin && !bPin) {
          const ox = dx * 0.5 * diff, oy = dy * 0.5 * diff;
          a.x += ox; a.y += oy; b.x -= ox; b.y -= oy;
        } else if (aPin && !bPin) {
          b.x -= dx * diff; b.y -= dy * diff;
        } else if (!aPin && bPin) {
          a.x += dx * diff; a.y += dy * diff;
        }
      }
    }
  }

  function maxVel() {
    let m = 0;
    const all = live ? threads.concat([live]) : threads;
    for (const t of all) {
      for (const p of t.pts) {
        const v = Math.hypot(p.x - p.px, p.y - p.py);
        if (v > m) m = v;
      }
    }
    return m;
  }

  // ── Render: single smoothed path (quadratic midpoints) ──
  function drawThread(t) {
    const pts = t.pts;
    g.beginPath();
    g.moveTo(pts[0].x, pts[0].y);
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2;
      const my = (pts[i].y + pts[i + 1].y) / 2;
      g.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    const last = pts[pts.length - 1];
    g.lineTo(last.x, last.y);
    g.strokeStyle = THREAD_COLOR;
    g.lineWidth = 2;
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.stroke();
    // Pin dots at every anchor
    g.fillStyle = PIN_COLOR;
    g.beginPath();
    g.arc(t.ax, t.ay, PIN_R, 0, Math.PI * 2);
    if (t.pin2) {
      g.moveTo(t.pin2.x + PIN_R, t.pin2.y);
      g.arc(t.pin2.x, t.pin2.y, PIN_R, 0, Math.PI * 2);
    }
    g.fill();
  }

  // ── Main loop ──
  function frame() {
    rafId = 0;
    if (document.hidden) return;
    const all = live ? threads.concat([live]) : threads;
    if (all.length === 0) return; // stopped — nothing to do
    for (const t of all) step(t);
    g.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const t of all) drawThread(t);
    if (!live) {
      if (maxVel() < SLEEP_VEL) {
        stillFrames++;
        if (stillFrames >= SLEEP_FRAMES) { stillFrames = 0; return; } // sleep
      } else {
        stillFrames = 0;
      }
    } else {
      stillFrames = 0;
    }
    rafId = requestAnimationFrame(frame);
  }

  function wake() {
    if (!rafId && !document.hidden) rafId = requestAnimationFrame(frame);
  }

  function stop() {
    if (rafId) { cancelAnimationFrame(rafId); rafId = 0; }
  }

  // Scroll far → quickly fade out + clear (threads live in viewport space)
  function fadeClear() {
    if (clearing || (threads.length === 0 && !live)) return;
    clearing = true;
    stop();
    const t0 = performance.now();
    (function fade(now) {
      const p = Math.min((now - t0) / 220, 1);
      canvas.style.opacity = String(1 - p);
      if (p < 1) {
        requestAnimationFrame(fade);
      } else {
        threads = [];
        live = null;
        stillFrames = 0;
        g.clearRect(0, 0, window.innerWidth, window.innerHeight);
        canvas.style.opacity = '1';
        clearing = false;
      }
    })(t0);
  }

  // ── Needle events ──
  function onDown(x, y) {
    try { sfx.thread(); } catch (e) { /* silent */ }
    cursor.x = x; cursor.y = y;
    downPos = { x, y };
    downMoved = false;
    if (live) {
      completeLive(live, x, y); // pin the free end — thread is done
      live = null;
    } else {
      live = newLive(x, y); // anchor a fresh thread at the press point
    }
    wake();
  }

  function onMove(x, y) {
    cursor.x = x; cursor.y = y;
    if (downPos && Math.hypot(x - downPos.x, y - downPos.y) > CLICK_TOL) downMoved = true;
    if (live) wake();
  }

  function onUp(x, y) {
    cursor.x = x; cursor.y = y;
    if (downPos && !downMoved) {
      // Simple click: complete the live thread at the click point,
      // then immediately start a new live thread from there.
      if (live) completeLive(live, x, y);
      live = newLive(x, y);
      wake();
    }
    downPos = null;
  }

  window.addEventListener('mousedown', (e) => onDown(e.clientX, e.clientY));
  window.addEventListener('mousemove', (e) => onMove(e.clientX, e.clientY));
  window.addEventListener('mouseup', (e) => onUp(e.clientX, e.clientY));
  window.addEventListener('touchstart', (e) => {
    const t = e.touches[0];
    if (t) onDown(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchmove', (e) => {
    const t = e.touches[0];
    if (t) onMove(t.clientX, t.clientY);
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    const t = e.changedTouches[0];
    if (t) onUp(t.clientX, t.clientY);
  }, { passive: true });

  window.addEventListener('scroll', () => {
    if (window.scrollY > SCROLL_CLEAR_Y) fadeClear();
  }, { passive: true });

  window.addEventListener('resize', fit);

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop();
    else if (threads.length > 0 || live) wake();
  });
}
