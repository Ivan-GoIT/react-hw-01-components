import css from './TransactionItem.module.css'
export const TransactionItem = ({ type, amount, currency, rowColor }) => (
  <tr>
    <td className={css[rowColor]}>{type}</td>
    <td className={css[rowColor]}>{amount}</td>
    <td className={css[rowColor]}>{currency}</td>
  </tr>
);

