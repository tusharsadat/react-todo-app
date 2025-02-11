import Todoitems from "./Todoitems";

const TodoItem = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <div className="row" key={todoItem.id}>
          <Todoitems todoItem={todoItem} />
        </div>
      ))}
    </>
  );
};

export default TodoItem;
