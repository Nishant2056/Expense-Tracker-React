const ExpenseItem = ({ item, date, price, handleDeleteButton }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <p className="card-text">Date: {date}</p>
        <p className="card-text">{price}</p>
        <button
          className="col-6 btn btn-danger"
          onClick={() => handleDeleteButton(item)}
        >
          Delete
        </button>
        <button className="col-6 btn btn-warning">Edit</button>
      </div>
    </div>
  );
};

export default ExpenseItem;
