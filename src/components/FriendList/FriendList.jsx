import css from './FriendList.module.css'
import classNames from 'classnames';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = props => {
  return (
    <div clasName={css.container}>
      <ul className={classNames(css['friend-list'], 'list-zeroing')}>
        {props.friends.map(friend => (
          <FriendListItem key={friend.id} {...friend} />
        ))}
      </ul>
    </div>
  );
};
