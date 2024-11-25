import './App.css';
// import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OffsetScrolling from './components/OffsetScrolling';
// import { HomeTwo, AboutTwo } from './components/MultiPage';
// import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <div>
      <Router>
        {/* <Routes>
          <Route path='/' element={<Home />} />
        </Routes> */}

        {/* <nav>
          <HashLink smooth to='/'>
            HomeTwo
          </HashLink>{' '}
          |{' '}
          <HashLink smooth to='/about'>
            AboutTwo
          </HashLink>
        </nav>
        <Routes>
          <Route path='/' element={<HomeTwo />} />
          <Route path='/about' element={<AboutTwo />} />
        </Routes> */}

        <Routes>
          <Route path='/' element={<OffsetScrolling />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
