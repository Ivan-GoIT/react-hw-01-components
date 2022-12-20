import css from './Statistics.module.css';
import classNames from 'classnames';
import { StatItem } from './StatItem/StatItem';
import PropTypes from 'prop-types'

export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title?<h2 className={css.title}>{title}</h2>:null}
      <ul className={classNames(css['stat-list'], 'list-zeroing')}>
        <StatItem stats={stats} />
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title:PropTypes.string,
};