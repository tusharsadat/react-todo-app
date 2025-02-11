import Todoitems from "./Todoitems";
import styles from "./TodoItem.module.css";
const TodoItem = ({ todoItems }) => {
  return (
    <>
      {todoItems.map((todoItem) => (
        <div className={` ${styles.row} ${styles.todoItem}`} key={todoItem.id}>
          <Todoitems todoItem={todoItem} />
        </div>
      ))}
    </>
  );
};

export default TodoItem;
