// gtag.js は初期描画のメインスレッドを塞ぐため、
// 初回操作かロード完了後の一定時間経過のどちらか早い方で読み込む
const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;
const FALLBACK_DELAY_MS = 8000;

export default defineNuxtPlugin(() => {
    const { initialize } = useGtag();
    let initialized = false;

    const start = () => {
        if (initialized) return;
        initialized = true;
        EVENTS.forEach((e) => window.removeEventListener(e, start));
        initialize();
    };

    EVENTS.forEach((e) => window.addEventListener(e, start, { once: true, passive: true }));
    const scheduleFallback = () => setTimeout(start, FALLBACK_DELAY_MS);
    if (document.readyState === "complete") {
        scheduleFallback();
    } else {
        window.addEventListener("load", scheduleFallback, { once: true });
    }
});
