import { useState } from "react";
import { MdOutlineAddCircle } from "react-icons/md";
import styles from "./AddTodo.module.css";
const AddTodo = ({ onTodoAdd }) => {
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddClick = () => {
    if (title && dueDate) {
      onTodoAdd(title, dueDate);
      setTitle("");
      setDueDate("");
    }
  };
  return (
    <div className={styles.row}>
      <div className={` ${styles["col-6"]}`}>
        <input
          type="text"
          className={` ${styles["form-control"]}`}
          placeholder="Enter Todo Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={` ${styles["col-4"]}`}>
        <input
          type="date"
          className={` ${styles["form-control"]}`}
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className={` ${styles["col-2"]}`}>
        <button
          className={`${styles.btn} ${styles["btn-primary"]}`}
          onClick={handleAddClick}
        >
          <MdOutlineAddCircle />
        </button>
      </div>
    </div>
  );
};

export default AddTodo;
