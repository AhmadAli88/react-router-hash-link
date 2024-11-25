import { HashLink } from 'react-router-hash-link';

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <p>
      Scroll to{' '}
      <HashLink smooth to='#about'>
        About Section
      </HashLink>
    </p>
    <div style={{ height: '100vh' }}></div>
    <section id='about' style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
      <h2>About Section</h2>
      <p>This is the about section of the page.</p>
    </section>
    
  </div>
);

export default Home;
