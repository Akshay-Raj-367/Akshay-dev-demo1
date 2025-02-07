import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';

import Demo from './components/Demo';
import Navigationbar from './components/navigationbar';
import Pages from './components/Pages';
import RandomUser from './components/RandomUser';

function App() {
  return (
    
    
    <Router>
      <div className="container">
        <Navigationbar title="HEROS NEVER DIE" font="Fonts/oswald.ttf" />
        <Demo />
        <Pages />
        <iframe src="http://www.google.com" width='100%' height="100%" style={{ border: ' 1px solid black' }} title="Example Page"></iframe>

        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <RandomUser></RandomUser>
      </div>
    </Router>
    
  );
  
}

export default App;


