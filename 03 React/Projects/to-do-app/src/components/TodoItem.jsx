function TodoItem({todoName, todoDate}) {
  return (
    <div className="container">
      <div className="row kg-row">

        <div className="col-6 py-2">{todoName}</div>
        <div className="col-4 py-2">{todoDate}</div>

        <div className="col-2">
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default TodoItem;