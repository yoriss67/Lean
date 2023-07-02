import React, { useState } from 'react';

function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="hero_scroll">
        <div className="hero_arrow_container">
          <div className="hero_arrow"></div>
        </div>
        <img src="frame.svg" alt="logo" />
      </div>

      <div className="hero_container">
        <h1 className="hero_h1">Lean</h1>

        <div className="hero_image_container">
          {/* spline */}
          {/* <div className="hero_image_bg"> */}
          <img src="ice-sample.png" alt="" />
          {/* </div> */}
        </div>
        <p className="hero_p">Improve your health while chilling.</p>
      </div>
    </div>
  );
}
export default Hero;
