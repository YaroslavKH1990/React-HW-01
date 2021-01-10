import React from 'react';
import Transaction from './Transaction.jsx';
import style from '../styles/Transaction.module.scss';

const TransactionHistory = ({ items }) => {
  return (
    <table class={style.transactionHistory}>
      <thead>
        <tr>
          <th className={style.th}>Type</th>
          <th className={style.th}>Amount</th>
          <th className={style.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction key={item.id} item={item} />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
