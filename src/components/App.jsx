import user from '../assets/user.json';
import data from '../assets/data.json'
import { Section } from './Section/Section';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <>
      <Section>
        <Profile {...user} />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data}/>
      </Section>
    </>
  );
};
