import { user, data, friends, transactions } from 'assets';

import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import {TransactionHistory} from './TransactionHistory/TransactionHistory'

export const App = () => {
  return (
    <>
      <Section>
        <Profile {...user} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
