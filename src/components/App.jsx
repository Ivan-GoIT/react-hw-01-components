import user from '../assets/user.json';
import { Profile } from './Profile/Profile';
import { Section } from './Section/Section';

export const App = () => {
  console.log('user');
  console.log(user);
  return (
    <Section>
      <Profile {...user} />
    </Section>
  );
};
