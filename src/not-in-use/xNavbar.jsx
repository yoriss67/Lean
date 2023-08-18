// import React, { useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

// export default function Navbar() {
//   // 🌸
//   const [open, setOpen] = useState(false);

//   const toggleNav = () => {
//     setOpen(!open);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg ">
//       <img className="navbar-brand" src="sun.png" alt="logo" />

//       <button className="navbar-toggler" type="button" onClick={toggleNav}>
//         {open ? <AiOutlineClose size={32} /> : <AiOutlineMenu size={32} />}
//       </button>
//       {open && (
//         <ul className={`navbar-nav ${open ? 'open' : ''}`}>
//           <li className="nav-item">
//             <a
//               className="nav-link "
//               aria-current="page"
//               href="https://twitter.com/iori73wsy"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faTwitter} />
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="https://www.instagram.com/ioriiii_13/" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={faInstagram} />
//             </a>
//           </li>

//           <li className="nav-item">
//             <a
//               className="nav-link"
//               href="https://www.linkedin.com/in/iori-kawano-131a4122a/"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <FontAwesomeIcon icon={faLinkedinIn} />
//             </a>
//           </li>

//           <li className="nav-item">
//             <a className="nav-link" href="https://github.com/yoriss67" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={faGithub} />
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="https://note.com/yoriss_b0607" target="_blank" rel="noreferrer">
//               <FontAwesomeIcon icon={faNoteSticky} />
//             </a>
//           </li>
//         </ul>
//       )}
//     </nav>
//   );
// }

import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../index';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">
          <img src="frame.png" alt="" />
        </Link>

        <ul id="navbar">
          {/* ページ内の遷移？ */}
          <li>
            <a href="">leanの特徴</a>
          </li>
          <li>
            <a href="">フレーバー</a>
          </li>
          <li>
            <a href="">メディア</a>
          </li>
          <li>
            <a href="">栄養成分</a>
          </li>

          <li><a><FontAwesomeIcon icon={faTwitter} /></a></li>
          <li><a><FontAwesomeIcon icon={faInstagram} /></a></li>
        </ul>
      </nav>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          
        </ul>
      </nav>  */}
    </>
  );
}
export default Navbar;
