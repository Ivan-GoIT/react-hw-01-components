import classNames from 'classnames';
import css from './FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline}) => {
  return (
      <li className={css.item}>
        <span
          className={classNames(css.status, isOnline ? css.online : '')}
        ></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
  );
};