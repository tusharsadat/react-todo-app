import styles from "./TodoItems.module.css";
const Todoitems = ({ todoItem }) => {
  return (
    <>
      <div className={` ${styles["col-6"]}`}>{todoItem.title}</div>
      <div className={` ${styles["col-4"]}`}>{todoItem.duedate}</div>
      <div className={` ${styles["col-2"]}`}>
        <button className={`${styles.btn} ${styles["btn-danger"]}`}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Todoitems;
