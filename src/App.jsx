import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </>
  );
}

export default App;
