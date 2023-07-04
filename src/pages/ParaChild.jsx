// import React from "react";
// import Parallax from "./Parallax";

// const ParaChild = () => (
//   <Parallax offset={100}>
//     <div style={{height: '200px', background: 'red'}}>Block 1</div>
//     <div style={{height: '200px', background: 'blue'}}>Block 2</div>
//     <div style={{height: '200px', background: 'green'}}>Block 3</div>
//   </Parallax>
// );

// export default ParaChild;


import React from 'react';
import Parallax from './Parallax';

const Star = ({ size, left, top }) => (
  <div
    style={{
      position: 'absolute',
      width: `${size}px`,
    //   width: `10px`,

      height: `${size}px`,
    // height: `10px`,

      borderRadius: '50%',
      backgroundColor: 'white',
      left: `${left}%`,
      top: `${top}%`,
    }}
  />
);

const ParaChild = () => {
  const stars = Array.from({ length: 50 }).map((_, i) => (
    <Star
      key={i}
      size={Math.random() * 8} // Random size between 0 and 2
      left={Math.random() * 100} // Random position from 0 to 100%
      top={Math.random() * 100} // Random position from 0 to 100%
    />
  ));

  return (
    <div
    
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        // backgroundColor: 'black',
      }}
    >
          <Parallax offset={100} >{stars}</Parallax>
    </div>
  );
};

export default ParaChild;
