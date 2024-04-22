import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useRef } from "react";
import {useInView} from 'framer-motion';
import { Contact } from "../Web-React/Contact/contact";
import './skillsResponsive.css';

export function Skills(){

    const [progress, setProgress] = React.useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref);
    
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    return(
        <div >
              <section  className="skills" id="skills-set" ref={ref} 
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}>
            <h2 className="mx-lg-3 d-flex justify-content-center">Skills</h2>
            <hr style={{height: '4px', backgroundColor: '#0d417f'}} />
            <div className="skillsRes" >

            <div className="container p-2">
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5">
                <img src="/images/html-logo.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress}  style={{marginTop:"-46px"}}/>
              </Box>
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5">
              <img src="/images/css-logo.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
                
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress} style={{marginTop:"-46px"}} />
              </Box>
              <CircularProgress variant="determinate" value={100} />
            
              <p className="me-5"> 
              <img src="/images/javascript-logo.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress}  style={{marginTop:"-46px"}}/>
              </Box>
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5"> 
              <img src="/images/nodejs.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress} style={{marginTop:"-46px"}} />
              </Box>
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5"> 
              <img src="/images/react.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress} style={{marginTop:"-46px"}}/>
              </Box>
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5"> 
              <img src="/images/java.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              
              </p>
              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress} style={{marginTop:"-46px"}}/>
              </Box>
              <CircularProgress variant="determinate" value={90} />
              <p className="me-5"> 
              <img src="/images/mongodb.png" alt="" style={{    width: "36px",margin: "-107px 0 -25px -36px"}} />
              
              </p>

              <Box sx={{ width: "50%", padding: "10px" }}>
                <LinearProgress variant="determinate" value={progress} style={{marginTop:"-46px"}}/>
              </Box>
              <div className="container-img  ">
                  <img src="/images/logo.png" style={{ width: "90%", marginTop: "-245px" }} alt="" />
            </div>
            </div>
        
            </div>
          </section>
  <hr />    

          <Contact/>
        </div>
    )
}