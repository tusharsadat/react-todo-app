import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App() {
  let todoItems = [
    {
      id: 1,
      title: "Learn React",
      duedate: "13 / 12 / 2020",
    },
    {
      id: 2,
      title: "Learn JSX",
      duedate: "12 / 12 / 2020",
    },
    {
      id: 3,
      title: "Learn JavaScript",
      duedate: "14 / 12 / 2020",
    },
  ];
  return (
    <>
      <div className="container">
        <Header />
        <AddTodo />
        <TodoItem todoItems={todoItems} />
      </div>
    </>
  );
}

export default App;
