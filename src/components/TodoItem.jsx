import Todoitems from "./Todoitems";
import styles from "./TodoItem.module.css";
const TodoItem = ({ todoItems, onDeleteItem }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <div className={` ${styles.row} ${styles.todoItem}`} key={todoItem.id}>
          <Todoitems todoItem={todoItem} onDeleteItem={onDeleteItem} />
        </div>
      ))}
    </>
  );
};

export default TodoItem;
