import React from "react"
import { Navbar, Hero, Hero2, Message, Flavors, Flavors2, Media, Nutrition, Social, Footer, Blog, Dev } from '../index';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



function Home() {
    return (
      <div className="home">
     
      {/* <h1 className="home_h1">Home🛏️🛋️💛💚</h1> */}
      
        <Hero2 />
        <Message /> 
        <Flavors2 />
        <Media />
        <Nutrition />
        {/* <Social /> */}
        <Footer />
        {/* <Dev /> */}
      </div>
    )
  }
  export default Home