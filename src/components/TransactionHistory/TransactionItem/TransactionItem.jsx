export const TransactionItem = ({ type, amount, currency, rowColor }) => (
  <tr className={rowColor}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

