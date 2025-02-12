import styles from "./TodoItems.module.css";
import { RiDeleteBin2Fill } from "react-icons/ri";
const Todoitems = ({ todoItem, onDeleteItem }) => {
  return (
    <>
      <div className={` ${styles["col-6"]}`}>{todoItem.title}</div>
      <div className={` ${styles["col-4"]}`}>{todoItem.duedate}</div>
      <div className={` ${styles["col-2"]}`}>
        <button
          className={`${styles.btn} ${styles["btn-danger"]}`}
          onClick={() => {
            onDeleteItem(todoItem.id);
          }}
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
    </>
  );
};

export default Todoitems;
