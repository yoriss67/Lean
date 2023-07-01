import React, { useState } from 'react';
import './Navbar.css';

import { Routes, Route, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
  const [navOpen, setNavOpen] = React.useState(false);

  const handleHamburgerClick = () => {
    setNavOpen(!navOpen);
  };

  const handleOverlayClick = () => {
    setNavOpen(false);
  };

  const navClass = navOpen ? 'nav_open' : '';
  return (
    <div className={`${navClass}`}>
    <header>
      <div  className="pc_navbar">
      <Link to="/" className='logo'>
          {/* <img src="frame.svg" alt="" /> */}
          {/* <h1 className='logo'>Lean</h1> */}
        </Link>

        <div className="sp_no">
          <nav className="pc_nav">
            <ul className="pc_ul">
              <li><a className="nav-item"  href="#message">leanの特徴</a></li>
              <li><a className="nav-item"  href="#flavors">フレーバー</a></li>
              <li><a className="nav-item"  href="#media">メディア</a></li>
              <li><a className="nav-item"  href="#nutrition">栄養成分</a></li>

              {/* <li><Link className="nav-item"  to="/blog">Blog</Link></li> */}
              <li><a><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </nav>
        </div>
      </div>
      {/* pcハンバーガーメニュー ↑ */}
      {/* spハンバーガーメニュー ↓ */}
      <div className="sp_navbar pc_no">
        <div className="overlay" id="js_overlay" onClick={handleOverlayClick}>{navOpen}</div>
        <div className="hamburger" id="js_hamburger" onClick={handleHamburgerClick}>
          <span className="first_line" />
          <span className="second_line" />
          <span className="third_line" />
        </div>
        <div className="sidemenu">
          <nav>
            <ul>
            <li><a className="nav-item"  href="#message">leanの特徴</a></li>
              <li><a className="nav-item"  href="#flavors">フレーバー</a></li>
              <li><a className="nav-item"  href="#media">メディア</a></li>
              <li><a className="nav-item"  href="#nutrition">栄養成分</a></li>
              {/* <li><Link className="nav-item"  to="/blog">Blog</Link></li> */}
              <li><a><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </div>
  );
}
