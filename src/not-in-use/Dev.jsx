import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

export default function Dev() {
  const [ref, isVisible] = useInView({ threshold: 0.7 });

  const variants = {
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      scale: 1.05,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
    hidden: {
      opacity: 0,
      rotateX: 90,
      y: 100,
      scale: 0.99,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  return (
    <div>
      <div style={{ height: '100vh' }}>
        <h1>Scroll down to next section 👇</h1>
      </div>

      <div ref={ref} style={{ height: '100vh', backgroundColor: '#23cebd' }}>
        <motion.div
          ref={ref}
          variants={variants}
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          style={{ marginLeft: '50px', transformStyle: "preserve-3d" }}
        >
          <h1>Hey I'm on the screen</h1>
          {/* <img
            style={{ borderRadius: "30px" }}
            alt="ralph from the simpsons waving his hand"
            src="https://i.giphy.com/media/ASd0Ukj0y3qMM/giphy.gif"
          /> */}
        </motion.div>
      </div>
    </div>
  );
}
