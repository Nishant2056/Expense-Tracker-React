import { MdOutlineDownloadDone } from "react-icons/md";
import { useState } from "react";

const AddExpense = ({ handleExpenses }) => {
  const [item, setItem] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");

  const getItem = (e) => {
    setItem(e.target.value);
  };
  const getDate = (e) => {
    setDate(e.target.value);
  };
  const getPrice = (e) => {
    setPrice(e.target.value);
  };

  const buttonIsClicked = () => {
    const expenseData = { id: Date.now(), item, date, price };
    handleExpenses(expenseData);
    setItem("");
    setDate("");
    setPrice("");
  };

  return (
    <div className="row justify-content-center enter-value-row">
      <div className="col-2">
        <input
          type="text"
          placeholder="Enter your Item here..."
          value={item}
          onChange={getItem}
        />
      </div>
      <div className="col-2">
        <input type="date" value={date} onChange={getDate} />
      </div>
      <div className="col-2">
        <input
          type="number"
          placeholder="Enter the price of the item in Nepali Rupees..."
          value={price}
          onChange={getPrice}
        />
      </div>

      <div className="col-1">
        <button
          type="button"
          className="btn btn-success d-flex align-items-center justify-content-center"
          onClick={buttonIsClicked}
        >
          <MdOutlineDownloadDone />
        </button>
      </div>
    </div>
  );
};

export default AddExpense;
