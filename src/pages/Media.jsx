import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import MediaData from './MediaData';

export default function Media() {

  // https://codepen.io/lokesh/pen/PMyajg?editors=1100
  const styles = {
    card: {
      overflow: 'hidden',
      position: 'absolute',
      width: '100vw',
      height: '100%',
      borderRadius: 8,
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1), inset 0 0 0 2px rgba(0, 0, 0, 0.15)',
      filter: 'blur(30px)',
      transformOrigin: '160px 100px',
      zIndex: -1,
    },
    cYellow: {
      top: 110,
      left: "50%",
      width: 240,
      height: 180,
      background: '#EEC050',
      borderRadius: '50%',
    },
    cPink: {
      top: -60,
      left: 70,
      width: 180,
      height: 220,
      background: '#E792DA',
      borderRadius: '50%',

    },
    cOrange: {
      top: 70,
      left: '60%',
      width: '20%',
      height: '20%',
      background: '#F6A380',
      borderRadius: '50%',

    },
    cBlue: {
      top: 70,
      left: -20,
      width: 180,
      height: 180,
      background: '#79F',
      borderRadius: '50%',

    },
  };
  
  // const variants = {
  //   visible: {
  //     opacity: 1,
  //     rotateX: 0,
  //     // rotateZ: 1,
  //     x: 0,
  //     y: 0,
  //     scale: 1.1,
  //     transition: { type: 'spring', stiffness: 50, damping: 40 },
  //   },
  //   hidden: {
  //     opacity: 0,
  //     rotateX: 90,
  //     x: -100,
  //     y: 10,
  //     scale: 0.9,
  //     transition: { type: 'spring', stiffness: 50, damping: 20 },
  //   },
  // };

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

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div className="media section" id="media">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <h2>
          たくさんのメディア様に
          <br className="dn-for-pc" /> ご紹介頂きました
        </h2>
      </motion.div>

      <div className="media_container">
        {MediaData.map((medium) => (
          <div key={medium.id} className="media_item">
            <a href="#">
              <img src="external-link.svg" className="link_logo" />
            </a>
            <img key={medium.id} src={medium.image} className={`item_image ${medium.className}`} />
          </div>
          // <div className="media_item">
          //   <a href="#">
          //     <img src="external-link.svg" className="link_logo" />
          //   </a>
          //   <img src="TAZIZAN.png" className="item_image tazizan" />
          // </div>
          // <div className="media_item">
          //   <a href="#">
          //     <img src="external-link.svg" className="link_logo" />
          //   </a>
          //   <img src="TEITAN.png" className="item_image teitan" />
          // </div>
          // <div className="media_item">

          //     <img src="external-link.svg" className="link_logo" />
          //     {/* <svg  className="link_logo" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#4b4949">
          //       <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          //       <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          //       <g id="SVGRepo_iconCarrier">
          //         {' '}
          //         <path
          //           fill="none"
          //           fillRule="evenodd"
          //           d="M18.885 2a1 1 0 00-1-1h-6a1 1 0 100 2h3.586L9.178 9.293a1 1 0 101.414 1.414l6.293-6.293V8a1 1 0 102 0V2zM3.009 3a2.012 2.012 0 00-1.998 2.218c.148 1.453.374 3.978.374 5.782 0 1.746-.212 4.17-.36 5.642a2.028 2.028 0 002.218 2.218c1.473-.148 3.896-.36 5.642-.36 1.804 0 4.33.226 5.782.374a2.012 2.012 0 002.218-1.998V12a1 1 0 10-2 0v4.878l-.003.003a.018.018 0 01-.006.003h-.006c-1.451-.147-4.068-.384-5.985-.384-1.857 0-4.37.222-5.842.37h-.008a.034.034 0 01-.012-.008.033.033 0 01-.008-.012.01.01 0 010-.002v-.006c.148-1.473.37-3.985.37-5.842 0-1.917-.237-4.534-.385-5.985v-.006l.004-.006A.016.016 0 013.007 5h4.878a1 1 0 000-2H3.009z"
          //         ></path>
          //         <a href="#"></a>
          //       </g>
          //     </svg> */}

          //   <img src="IROIRO.png" className="item_image keizai" />
          // </div>
        ))}
      </div>

      <div className="media_comment">
        <span className="initial-quote">“</span>
        <p>
          The first time I decided to bake brownies I totally failed. The second time same. The cake
          always came out too gooey, too dry, too wet...
        </p>
        <span className="end-quote">”</span>
      </div>



      <div style={styles.card}>
      <div style={styles.cOrange}></div>
      <div style={styles.cYellow}></div>
      <div style={styles.cPink}></div>
      <div style={styles.cBlue}></div>
    </div>
    </div>
  );
}
