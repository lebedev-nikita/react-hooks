import { Dispatch, SetStateAction, useEffect, useState } from "react";

export function useValue<T>(_value: T, deps: unknown[]): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(_value);
  useEffect(() => setState(_value), deps);

  return [state, setState] as const;
}
