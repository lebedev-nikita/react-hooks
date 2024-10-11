import { useEffect } from "react";

export function useDelayedEffect(ms: number, deps: unknown[], callback: () => void) {
  useEffect(() => {
    const timerId = setTimeout(callback, ms);
    return () => clearTimeout(timerId);
  }, deps);
}
