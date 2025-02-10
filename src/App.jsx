import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1>Todo App</h1>
        <div className="row">
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Todo Here"
            />
          </div>
          <div className="col-4">
            <input type="date" className="form-control" />
          </div>
          <div className="col-3">
            <button className="btn btn-primary">Add</button>
          </div>
        </div>
        <div className="row">
          <div className="col-5">Tushar date of birth is</div>
          <div className="col-4">12/12/1998</div>
          <div className="col-3">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
        <div className="row">
          <div className="col-5">Tilka date of birth is</div>
          <div className="col-4">12/11/2000</div>
          <div className="col-3">
            <button className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
