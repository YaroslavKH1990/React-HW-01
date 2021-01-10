import React from 'react';
import style from '../styles/Transaction.module.scss';

const Transaction = ({ item: { type, amount, currency } }) => {
  return (
    <tr className={style.currency}>
      <td className={style.tdCurrency}>{type}</td>
      <td className={style.tdCurrency}>{amount}</td>
      <td className={style.tdCurrency}>{currency}</td>
    </tr>
  );
};

export default Transaction;
