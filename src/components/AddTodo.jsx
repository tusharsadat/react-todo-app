import styles from "./AddTodo.module.css";
const AddTodo = () => {
  return (
    <div className={styles.row}>
      <div className={` ${styles["col-6"]}`}>
        <input
          type="text"
          className={` ${styles["form-control"]}`}
          placeholder="Enter Todo Here"
        />
      </div>
      <div className={` ${styles["col-4"]}`}>
        <input type="date" className={` ${styles["form-control"]}`} />
      </div>
      <div className={` ${styles["col-2"]}`}>
        <button className={`${styles.btn} ${styles["btn-primary"]}`}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
