import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const addNotification = () => toast("Transaction has been added");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Name</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
            autoFocus
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount (Negative = Expense, Positive = Income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount here..."
          />
        </div>
        <button className="btn" onClick={addNotification}>
          Add transaction
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};
