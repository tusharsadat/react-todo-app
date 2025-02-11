const Todoitems = ({ todoItem }) => {
  return (
    <>
      <div className="col-6">{todoItem.title}</div>
      <div className="col-4">{todoItem.duedate}</div>
      <div className="col-2">
        <button className="btn btn-danger">Delete</button>
      </div>
    </>
  );
};

export default Todoitems;
