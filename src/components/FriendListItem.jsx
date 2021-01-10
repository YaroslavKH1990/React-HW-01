import React from 'react';
import style from '../styles/friendListItem.module.scss';

const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  const statusUser = isOnline ? style.online : style.offline;
  return (
    <li className={style.item}>
      <span className={statusUser}></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendListItem;
