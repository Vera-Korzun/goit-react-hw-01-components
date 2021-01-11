import React from "react";
import PropTypes from "prop-types";
import TransactionHistoryItem from "./TransactionHistoryItem";

const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map((transaction) => (
          <TransactionHistoryItem {...transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
