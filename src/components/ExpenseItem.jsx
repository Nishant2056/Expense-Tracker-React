const ExpenseItem = ({ item, date, price, handleDeleteButton }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{item}</h5>
        <p className="card-text">Date: {date}</p>
        <p className="card-text">{price}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleDeleteButton(item)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
