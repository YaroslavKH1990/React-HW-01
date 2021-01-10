import React from 'react';
import style from '../styles/statistics.module.scss';

const StatList = ({ stat: { label, percentage } }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

export default StatList;
