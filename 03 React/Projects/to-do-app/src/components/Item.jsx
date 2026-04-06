import { MdDeleteForever } from "react-icons/md";

function Item({ todoName, todoDate, onDeleteClick }) {
  return (
    <div className="container">
      <div className="row py-1">

        <div className="col-6 py-2">{todoName}</div>
        <div className="col-4 py-2">{todoDate}</div>

        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDeleteForever size={20} />
          </button>
        </div>
        
      </div>
    </div>
  );
}

export default Item;