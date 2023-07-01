import { Routes, Route, Link } from 'react-router-dom';
import { Home, Navbar, Blog, Blog1 } from './index';
import './index.css';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Routes>
          {/* 🙋‍♀️Routeの中でもHomeは"/"なので表示される */}
          <Route path="/" element={<Home />} />
          <Route path="/blog/*" element={<Blog />} />
          {/* <Route path="/about/:id" element={<Blog />} /> */}
          {/* <Route path="/about/:id" element={<Blog1 />} /> */}
        </Routes>

        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About🙋‍♀️</Link>
            </li>
          </ul>
        </nav> */}

        {/* ❌<Page /> */}
      </div>
    </div>
  );
}

export default App;
