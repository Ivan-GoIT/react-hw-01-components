import css from './Statistics.module.css';
import classNames from 'classnames';
import { StatItem } from './StatItem/StatItem';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={classNames(css['stat-list'], 'list-zeroing')}>
        <StatItem stats={stats} />
      </ul>
    </div>
  );
};
