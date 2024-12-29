import { useCallback, useState } from "react";
import { Counter } from "./counter";

export function Usecounter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, [counter]);

  const handleDecrement = useCallback(
    (c) => {
      setCounter((c) => (c > 0 ? c - 1 : 0));
    },
    [counter]
  );

  const handleReset = useCallback(
    (c) => {
      setCounter(0);
    },
    [counter]
  );

  return {
    counter: counter,
    onAdd: handleIncrement,
    onRemove: handleDecrement,
    onReset: handleReset,
  };
}
