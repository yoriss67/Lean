// import { useInView } from 'react-intersection-observer';
import React, { useState } from 'react';
// import {  motion, useAnimation } from 'framer-motion';

function Hero() {
  // const variants = {
  //   visible: {
  //     opacity: 1,
  //     rotateX: 0,
  //     y: 0,
  //     scale: 1.05,
  //     transition: { type: 'spring', stiffness: 50, damping: 20 },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     rotateX: 90,
  //     y: 100,
  //     scale: 0.99,
  //     transition: {
  //       type: 'spring',
  //       stiffness: 50,
  //       damping: 20,
  //       delay: 1,
  //     },
  //   },
  // };

  return (
    <div className="hero" id="hero">
      <div className="hero_container">
        <div className="hero_text">
          {/* <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 4, ease: 'easeOut' }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h1 className="hero_h1">Lean</h1>
          </motion.div> */}

          <h1 className="hero_h1">Lean</h1>

          <p className="hero_p">Improve your health while chilling.</p>
        </div>
        <div className="hero_image_container">
          {/* spline */}
          <div className="hero_image_bg">{/* <img src="frame.svg" alt="" className="hero_image"/> */}</div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
