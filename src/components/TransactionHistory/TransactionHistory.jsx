import { TransactionItem } from './TransactionItem/TransactionItem';
import css from './TransactionHistory.module.css'

export const TransactionHistory = props => {
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            {...transaction}
            rowColor={index % 2 ? 'light' : 'dark'}
          />
        ))}
      </tbody>
    </table>
  );
};
