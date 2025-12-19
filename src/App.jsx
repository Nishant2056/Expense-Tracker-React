import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddExpense from "./components/AddExpense";
import ExpenseItem from "./components/ExpenseItem";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const handleExpenses = (newExpenses) => {
    console.log(newExpenses);
    setExpenses([...expenses, newExpenses]);
  };

  const handleDeleteButton = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
    // const updatedExpenses = expenses.filter((exp) => exp.item !== item);
    // setExpenses(updatedExpenses);
    // setExpenses((prevExpenses) => {
    //   prevExpenses.filter((expense) => expense.item !== item);
    // });
  };

  return (
    <>
      <center>
        <h1 style={{ fontSize: "50px", color: "Black", marginBottom: "30px" }}>
          Expense Tracker
        </h1>
        <AddExpense handleExpenses={handleExpenses}></AddExpense>
      </center>
      <div className="expense-item d-flex flex-wrap gap-4 mt-4">
        {expenses.length === 0 ? (
          <p style={{ marginLeft: "auto", marginRight: "auto" }}>
            Enter Your Expenses for Today!!!
          </p>
        ) : (
          expenses.map((exp) => (
            <ExpenseItem
              key={exp.id}
              id={exp.id}
              item={exp.item}
              date={exp.date}
              price={exp.price}
              handleDeleteButton={handleDeleteButton}
            />
          ))
        )}
      </div>
    </>
  );
}

export default App;
