import "./style.css";
import React, { useState,useRef,Suspense } from "react";
import { useTypewriter } from "react-simple-typewriter";

import { Link } from "react-router-dom";
import { Skills } from "../Skills/skills";

import {motion, useScroll, useSpring,useInView,MotionConfig, useMotionValue} from 'framer-motion';
import {transition} from '../Web-React/threejs/settings'
import { Shapes } from "../Web-React/threejs/Shapes"
import useMeasure from "react-use-measure";
 import '../Web-React/threejs/threestyle.css';
import './responsive.css';
 export function WebsiteProject() {

  const [bounds] = useMeasure({ scroll: false });
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const resetMousePosition = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });





  const [typeEffect] = useTypewriter({
    words: ["React Developer", "Web Developer", "Designer"],
    loop: {},
    typeSpeed: 100,
  });

  


  return (
    <div >
      <motion.div className="progress-bar" style={{scaleX}}/>
      <div style={{marginTop:"2rem"}}  > 
        <main   >
      
          <section className="first-section" id='home'
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          ref={ref}>
            <div className="left-section ">
              <img src="./images/mainLogo.png" className="" alt="" />
            </div>
            <div className="right-section w-25 "
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateX(500px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
              <div className="content-right">
                <h1 className="first-sent">
                  Hey! I am Mark
                  <div>

                    <span> Iam a </span>
                  </div>
                  <div className="effects">
                    <span
                      style={{
                        fontWeight: "bold",
                        color: "#6da6f4",
                        fontFamily: "Vollkorn",
                      }}
                    >
                      {typeEffect}
                    </span>
                  </div>
                </h1>
                <div className="container">
             
                  {/* <button className="motion-btn"> */}
                  <MotionConfig transition={transition} className='motion-btn'>
      <motion.button
        ref={ref}
        initial={false}
        animate={isHover ? "hover" : "rest"}
        whileTap="press"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.5 },
          press: { scale: 1.4 }
        }}
        onHoverStart={() => {
          resetMousePosition();
          setIsHover(true);
        }}
        onHoverEnd={() => {
          resetMousePosition();
          setIsHover(false);
        }}
        onTapStart={() => setIsPress(true)}
        onTap={() => setIsPress(false)}
        onTapCancel={() => setIsPress(false)}
        onPointerMove={(e) => {
          mouseX.set(e.clientX - bounds.x - bounds.width / 2);
          mouseY.set(e.clientY - bounds.y - bounds.height / 2);
        }}
      >
        <motion.div
          className="shapes"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 }
          }}
        >
          <div className="pink blush" />
          <div className="blue blush" />
          <div className="container">
            <Suspense fallback={null}>
              <Shapes
                isHover={isHover}
                isPress={isPress}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            </Suspense>
          </div>
        </motion.div>
        <motion.div
          variants={{ hover: { scale: 0.85 }, press: { scale: 1.1 } }}
          className="label"
        >
         <Link to='https://github.com/airazkhan17' className="text-decoration-none text-white fs-2 w-25 githubbtn"> Github
                </Link>
        </motion.div>
      </motion.button>
    </MotionConfig>
  
              
                 
                  
                </div>
              </div>
            </div>
          </section>

         
          <hr style={{ height: "4px", backgroundColor: "#0d417f" }} />

        </main>
     
          <section className="skills">
            <Skills />
          </section>
      </div>
    </div>
  );
}
