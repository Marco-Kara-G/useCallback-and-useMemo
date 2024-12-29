import { Usecounter } from "./useCounter";

export function Counter() {
  const { counter, onAdd, onRemove, onReset } = Usecounter();

  return (
    <div>
      <h2>you've counted to: {counter}</h2>
      <button onClick={onAdd}>Add</button>
      <button onClick={onRemove}>Remove</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
