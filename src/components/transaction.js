import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";
import { ToastContainer, toast } from "react-toastify";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  const delNotification = () => toast("Transaction has been deleted");
  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          class="delete-btn"
          onClick={() => {
            deleteTransaction(transaction.id);
            delNotification();
          }}
        >
          x
        </button>
        <ToastContainer />
      </li>
    </div>
  );
};
