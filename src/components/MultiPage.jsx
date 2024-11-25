
import { HashLink } from 'react-router-hash-link';

export const HomeTwo = () => (
  <div>
    <h1>Home Page</h1>
    <HashLink smooth to='/about#team'>
      Go to About - Team Section
    </HashLink>
  </div>
);

export const AboutTwo = () => (
  <div>
    <h1>About Page</h1>
    <HashLink smooth to='#team'>
      Scroll to Team
    </HashLink>
    <div style={{ height: '100vh' }}></div>
    <section id='team' style={{ backgroundColor: '#e0e0e0', padding: '20px' }}>
      <h2>Team Section</h2>
      <p>This is the team section.</p>
    </section>
  </div>
);
