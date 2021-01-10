import React from 'react';
import StatList from './StatList.jsx';
import style from '../styles/statistics.module.scss';

const Statistics = ({ stats }) => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Upload stats</h2>

      <ul className={style.statList}>
        {stats.map(stat => (
          <StatList key={stat.id} stat={stat} />
        ))}
      </ul>
    </div>
  );
};

export default Statistics;
