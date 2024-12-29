import "./App.css";
import { Counter } from "./components/counter";
import { FilteredList } from "./components/FilteredList";

function App() {
  const userList = [
    {
      name: "Marco",
      age: 32,
      id: 0,
    },
    {
      name: "Luca",
      age: 16,
      id: 1,
    },
    {
      name: "Maria",
      age: 56,
      id: 2,
    },
    {
      name: "Samantha",
      age: 23,
      id: 3,
    },
    {
      name: "Lorenzo",
      age: 12,
      id: 4,
    },
    {
      name: "Dario",
      age: 48,
      id: 5,
    },
  ];
  return (
    <div>
      <Counter />
      <hr />
      <FilteredList array={userList} />
    </div>
  );
}

export default App;
