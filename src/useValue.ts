import { Dispatch, SetStateAction, useEffect, useState } from "react";

/**
  Works like useState, but updates _value_ whenever dependencies change

  @example
  const [value, setValue] = useValue(externalValue, [externalValue]);
*/

export function useValue<T>(_value: T, deps: unknown[]): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(_value);
  useEffect(() => setState(_value), deps);

  return [state, setState] as const;
}
