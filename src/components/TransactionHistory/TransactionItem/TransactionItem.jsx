import css from './TransactionItem.module.css';
import PropTypes from 'prop-types';



export const TransactionItem = ({ type, amount, currency, rowColor }) => (
  <tr>
    <td className={css[rowColor]}>{type}</td>
    <td className={css[rowColor]}>{amount}</td>
    <td className={css[rowColor]}>{currency}</td>
  </tr>
);

TransactionItem.propTypes = {
  type:PropTypes.string.isRequired,
  amount:PropTypes.string.isRequired,
  currency:PropTypes.string.isRequired,
  rowColor:PropTypes.string.isRequired,
};