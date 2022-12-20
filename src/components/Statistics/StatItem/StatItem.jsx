import css from './StatItem.module.css';
import { getRandomHexColor } from 'helpers';
import PropTypes from 'prop-types';

export const StatItem = ({ stats = [] }) => {
  return [...stats].map(({ id, label, percentage }) => {
    const randomColor = getRandomHexColor();
    return (
      <li
        className={css.item}
        key={id}
        style={{ backgroundColor: randomColor }}
      >
        <span className={css.label}>{label} </span>
        <span className={css.percentage}>{percentage}%</span>
      </li>
    );
  });
};

StatItem.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
