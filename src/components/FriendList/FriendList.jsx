import css from './FriendList.module.css';
import classNames from 'classnames';
import { FriendListItem } from './FriendListItem/FriendListItem';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <div className={css.container}>
      <ul className={classNames(css['friend-list'], 'list-zeroing')}>
        {friends.map(friend => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </ul>
    </div>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
