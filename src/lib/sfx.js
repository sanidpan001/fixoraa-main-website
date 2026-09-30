/* ============================================================
   Fixoraa game SFX — tiny Web Audio click/blip sounds.
   No audio files: everything is synthesized with oscillators.
   The AudioContext is created lazily on the first user-triggered
   call (all game sounds fire from click/key handlers), so the
   browser autoplay policy is always satisfied.
   Keep volumes low — these are meant to be felt, not heard.
   ============================================================ */

let ctx = null;

function ac() {
  if (!ctx) {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
  }
  if (ctx.state === 'suspended') ctx.resume();
  return ctx;
}

/**
 * Play one soft enveloped tone.
 * @param {number} freq      start frequency (Hz)
 * @param {object} opts      { freqEnd, dur, type, vol, delay }
 */
function tone(freq, opts) {
  const o = opts || {};
  const c = ac();
  if (!c) return;
  const dur = o.dur || 0.06;
  const t0 = c.currentTime + (o.delay || 0);
  try {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.type = o.type || 'sine';
    osc.frequency.setValueAtTime(freq, t0);
    if (o.freqEnd) osc.frequency.exponentialRampToValueAtTime(o.freqEnd, t0 + dur);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(o.vol || 0.07, t0 + 0.008);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
    osc.connect(gain);
    gain.connect(c.destination);
    osc.start(t0);
    osc.stop(t0 + dur + 0.05);
  } catch (e) {
    /* audio unavailable — stay silent */
  }
}

export const sfx = {
  /** generic soft UI tap */
  click() {
    tone(620, { dur: 0.05, type: 'triangle', vol: 0.05 });
  },
  /** keyboard / pad key press */
  key() {
    tone(540, { dur: 0.045, type: 'triangle', vol: 0.05 });
  },
  /** tactile "thock": chess move, sudoku entry, tetris lock */
  place() {
    tone(240, { freqEnd: 170, dur: 0.09, type: 'sine', vol: 0.13 });
  },
  /** thread pluck: soft needle "thwip" when pinning/drawing a thread.
      Decaying triangle with downward pitch sweep + faint octave shimmer
      for a string-like feel. Base 180–320 Hz, ~0.25 s decay, subtle. */
  thread() {
    const base = 180 + Math.random() * 140;
    tone(base, { freqEnd: base * 0.55, dur: 0.25, type: 'triangle', vol: 0.08 });
    tone(base * 2, { freqEnd: base * 1.1, dur: 0.12, type: 'sine', vol: 0.025 });
  },
  /** word tile flip */
  flip() {
    tone(720, { dur: 0.05, type: 'triangle', vol: 0.055 });
  },
  /** tetris rotate whoosh */
  rotate() {
    tone(420, { freqEnd: 640, dur: 0.06, type: 'sine', vol: 0.055 });
  },
  /** tetris lateral step — extra short & quiet (fires on key repeat) */
  step() {
    tone(330, { dur: 0.03, type: 'sine', vol: 0.03 });
  },
  /** line clear: tiny rising arpeggio */
  clear() {
    [523, 659, 784].forEach((f, i) =>
      tone(f, { dur: 0.08, type: 'sine', vol: 0.08, delay: i * 0.06 })
    );
  },
  /** wrong entry */
  error() {
    tone(185, { freqEnd: 140, dur: 0.11, type: 'sine', vol: 0.06 });
  },
};
