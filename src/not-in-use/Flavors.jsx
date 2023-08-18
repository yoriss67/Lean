import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

import FlavorsData from '../data/flavorsData';

function Flavors() {
  const variants = {
    visible: {
      opacity: 1,
      rotateX: 0,
      // rotateZ: 1,
      x: 0,
      y: 0,
      scale: 1.1,
      transition: { type: 'spring', stiffness: 50, damping: 40 },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
      x: -100,
      y: 10,
      scale: 0.9,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="flavors section" id="flavors">
      <div className="flavors_container">
        <motion.h2
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Flavors
        </motion.h2>
        {console.log(FlavorsData)}

        <div className="flavors_items_container">
          {FlavorsData.map((flavor) => (
            <div key={flavor.id} className="flavors_item">
              <div className="item_image_container">
                <img key={flavor.id} src={flavor.image} alt="" />
              </div>
              <div className="item_text_container">
                <div className="item_name">
                  <h3>{flavor.title}</h3>
                </div>
                <div className="item_description">
                  <div className="item_intro">{flavor.desc}</div>
                  <div className="item_kcal">
                    <span className="bold_kcal">{flavor.kcal}</span>kcal
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Flavors;
