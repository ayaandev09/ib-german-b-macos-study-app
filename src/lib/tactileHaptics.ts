/**
 * Universal tactile mechanical feedback listener for mouse and trackpad clicks.
 * Applies instant hardware-accelerated spring compression to buttons, pills and interactive controls.
 */
export function initGlobalTactileListener(): () => void {
  if (typeof window === "undefined") return () => {};

  const handlePointerDown = (e: PointerEvent) => {
    const target = (e.target as HTMLElement)?.closest("button, [role='button'], a, .soft-button, .liquid-glass-pill");
    if (!target) return;

    (target as HTMLElement).style.transition = "transform 80ms cubic-bezier(0.2, 0.8, 0.2, 1)";
    (target as HTMLElement).style.transform = "scale(0.95)";
  };

  const handlePointerUp = (e: PointerEvent) => {
    const target = (e.target as HTMLElement)?.closest("button, [role='button'], a, .soft-button, .liquid-glass-pill");
    if (!target) return;

    (target as HTMLElement).style.transition = "transform 180ms cubic-bezier(0.34, 1.56, 0.64, 1)";
    (target as HTMLElement).style.transform = "";
  };

  window.addEventListener("pointerdown", handlePointerDown, { passive: true });
  window.addEventListener("pointerup", handlePointerUp, { passive: true });
  window.addEventListener("pointercancel", handlePointerUp, { passive: true });

  return () => {
    window.removeEventListener("pointerdown", handlePointerDown);
    window.removeEventListener("pointerup", handlePointerUp);
    window.removeEventListener("pointercancel", handlePointerUp);
  };
}
