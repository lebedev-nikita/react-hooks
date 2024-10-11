import { useEffect } from "react";

export function useKeyHandler(
  key: string,
  opt: { ctrlKey?: boolean; altKey?: boolean; shiftKey?: boolean },
  deps: unknown[],
  onKey: (e: KeyboardEvent) => void
) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key !== key) return;
      if (opt.ctrlKey !== undefined && opt.ctrlKey !== e.ctrlKey) return;
      if (opt.altKey !== undefined && opt.altKey !== e.altKey) return;
      if (opt.shiftKey !== undefined && opt.shiftKey !== e.shiftKey) return;
      onKey(e);
    };

    globalThis.addEventListener("keypress", handler);
  }, deps);
}
