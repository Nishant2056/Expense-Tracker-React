const ExpenseItem = ({ id, item, date, price, handleDeleteButton }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <p className="card-text">{date}</p>
        <p className="card-text">{price}</p>
        <div className="d-flex gap-2 justify-content-center">
          <button
            className="col-6 btn btn-danger"
            onClick={() => handleDeleteButton(id)}
          >
            Delete
          </button>
          <button className="col-6 btn btn-warning">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
