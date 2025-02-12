import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";

function App() {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "Learn React",
      duedate: "13 / 12 / 2020",
    },
  ]);
  const handleTodoAdd = (title, dueDate) => {
    const newTodo = {
      id: Date.now(),
      title: title,
      duedate: dueDate,
    };
    setTodoItems([...todoItems, newTodo]);
  };
  const handleDeleteItem = (id) => {
    const newTodoItems = todoItems.filter((todoItem) => todoItem.id !== id);
    setTodoItems(newTodoItems);
  };
  return (
    <>
      <div className="container">
        <Header />
        <AddTodo onTodoAdd={handleTodoAdd} />
        <TodoItem todoItems={todoItems} onDeleteItem={handleDeleteItem} />
      </div>
    </>
  );
}

export default App;
