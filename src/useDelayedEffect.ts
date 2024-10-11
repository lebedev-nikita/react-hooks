import { useEffect } from "react";

/**
  Executes effect after delay

  @example
  const [text, setText] = useState("");
  useDelayedEffect(300, [text], () => persistValue(text));
*/

export function useDelayedEffect(ms: number, deps: unknown[], callback: () => void) {
  useEffect(() => {
    const timerId = setTimeout(callback, ms);
    return () => clearTimeout(timerId);
  }, deps);
}
