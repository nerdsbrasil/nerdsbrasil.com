/** SND01 sine taps — Yasuhiro Tsuchiya / https://snd.dev/ */

const TAP_SRC = [
  "/audio/snd01/tap_01.wav",
  "/audio/snd01/tap_02.wav",
  "/audio/snd01/tap_03.wav",
  "/audio/snd01/tap_04.wav",
  "/audio/snd01/tap_05.wav",
] as const;

const VOLUME = 0.2;
const cache = new Map<string, HTMLAudioElement>();

function ensure(src: string) {
  let el = cache.get(src);
  if (!el) {
    el = new Audio(src);
    el.preload = "auto";
    cache.set(src, el);
  }
  return el;
}

export function preloadTaps() {
  if (typeof window === "undefined") return;
  for (const src of TAP_SRC) ensure(src);
}

export function playTap() {
  if (typeof window === "undefined") return;
  const src = TAP_SRC[Math.floor(Math.random() * TAP_SRC.length)]!;
  const node = ensure(src).cloneNode(true) as HTMLAudioElement;
  node.volume = VOLUME;
  void node.play().catch(() => undefined);
}
