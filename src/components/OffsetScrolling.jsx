import { HashLink } from 'react-router-hash-link';

const OffsetScrolling = () => (
  <div style={{ padding: '20px' }}>
    <h1>Home Page</h1>
    <p>
      Use the button below to scroll smoothly to the About Section with offset
      adjustment.
    </p>
    <HashLink
      smooth
      to='#about'
      scroll={(el) =>
        el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
      style={{
        display: 'inline-block',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
      }}
    >
      Scroll to About Section
    </HashLink>
    <div style={{ height: '100vh' }}></div>
    <section
      id='about'
      style={{
        padding: '50px',
        backgroundColor: '#f0f0f0',
        marginTop: '20px',
        borderRadius: '5px',
      }}
    >
      <h2>About Section</h2>
      <p>
        This is the About section. The smooth scroll feature ensures a seamless
        user experience when navigating within the page.
      </p>
    </section>
  </div>
);

export default OffsetScrolling;
