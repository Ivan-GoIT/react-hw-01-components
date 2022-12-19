import css from './StatItem.module.css'
import { getRandomHexColor } from 'helpers';
export const StatItem = ({ stats = [] }) => {
  return [...stats].map(({ id, label, percentage }) => {
    const randomColor=getRandomHexColor()
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
