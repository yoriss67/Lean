// import React, { useState, useEffect } from 'react';
// import { Navbar, Hero, Hero2, Message, Flavors, Flavors2, Media, Nutrition, Social, Footer, Blog, Dev, Parallax, ParaChild } from '../index';

// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// import "../index.css"

// function Home() {
//   const [bgColor, setBgColor] = useState('#9ba4c8');

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const hero = document.getElementById('hero');
// //       if (hero) {
// //         const offsetTop = hero.offsetTop;
// //         const offsetHeight = hero.offsetHeight;
// //         setBg(window.scrollY > offsetTop + offsetHeight);
// //       }
// //     }
// //   })

// //   window.addEventListener('scroll', handleScroll);
// //   return () => {
// //     window.removeEventListener('scroll', handleScroll);
// // }, []);

//   const handleScroll = () => {
//     // window.scrollY > '10vh' ? setBgColor("#fff") : setBgColor("#9ba4c8");
//     const hero = document.getElementById('hero');
//     const offsetTop = hero.offsetTop;
//     const offsetHeight = hero.offsetHeight;

//     if (window.scrollY > offsetTop + offsetHeight) {
//       // setBgColor(window.scrollY > offsetTop + offsetHeight);
//       setBgColor("#fff");
//     } else {
//       setBgColor("#9ba4c8");
//     }
//   }
//   useEffect(() => {
//   window.addEventListener('scroll', handleScroll);
//   return () => window.removeEventListener('scroll', handleScroll);
// }, []);


//     return (
//       <div className='home'>
     
//       {/* <h1 className="home_h1">Home🛏️🛋️💛💚</h1> */}
      
//         <Hero2
//          id='hero'
//          style={{
//           backgroundColor: bgColor,
//           transition: "all 1s" 
//         }}
//          />
//         <Message /> 
//         <Flavors2 />
//         <Media />
//         <Nutrition />
//         {/* <Social /> */}
//         <Footer />
//         {/* <Dev /> */}
//         <Parallax />
//         <ParaChild />
//       </div>
//     )
//   }
//   export default Home

import React, { useState, useEffect } from 'react';
import { Navbar, Hero, Hero2, Message, Flavors, Flavors2, Media, Nutrition, Social, Footer, Blog, Dev, Parallax, ParaChild, Vertical } from '../index';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "../index.css"

function Home() {
  const [bgColor, setBgColor] = useState('#3d6481');

  const handleScroll = () => {
    const hero2 = document.getElementById('hero');
    const offsetTop = hero2.offsetTop;
    const offsetHeight = hero2.offsetHeight;

    if (window.scrollY > offsetTop + offsetHeight) {
      setBgColor("#F8F7EE");
    } else {
      // setBgColor("#ec6701ba");
      setBgColor("#438ba3");

    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = 'background-color 1s';  // Add this line
  }, [bgColor]);

  return (
    <div className='home'>
      <Hero2 id='hero' />
      <Message /> 
      <Flavors2 />
      <Media />
      <Nutrition />
      <Footer />
      {/* <Parallax />
      <ParaChild /> */}
      
      {/* <Vertical /> */}
    </div>
  )
}
export default Home;
