import { useMemo } from "react";

export function FilteredList({ array }) {
  const filteredArray = useMemo(
    () => array.filter((user) => user.age > 18),
    [array]
  );

  return (
    <div>
      <ul>
        {filteredArray.map((user) => (
          <li key={user.id}>
            <span>Name:</span>
            <span style={{ color: "blue" }}>{user.name} </span>
            <span>Age:</span>
            <span style={{ color: "blue" }}>{user.age} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
