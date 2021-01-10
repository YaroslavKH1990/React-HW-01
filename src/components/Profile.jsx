import React from 'react';
import style from '../styles/profile.module.scss';

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <div id={style.wrapper}>
        <div className={style.profile}>
          <div className="description">
            <img
              src={avatar}
              alt="Аватар пользователя"
              className={style.avatar}
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
          </div>

          <ul className={style.stats}>
            <li>
              <span className="label">Followers</span>
              <br />
              <span className="quantity">{stats.followers}</span>
            </li>
            <li>
              <span className="label">Views</span>
              <br />
              <span className="quantity">{stats.views}</span>
            </li>
            <li>
              <span className="label">Likes</span>
              <br />
              <span className="quantity">{stats.likes}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Profile;
