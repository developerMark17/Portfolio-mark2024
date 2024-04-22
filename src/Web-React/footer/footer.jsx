import { Link } from "react-router-dom"
import '../footer/footerStyle.css';
import { useRef } from "react";
import { useInView } from "framer-motion";
import './footerResponsive.css';

export function Footer({theme}){
    const ref = useRef(null);
    const isInView = useInView(ref);
    return(
        <div style={{marginTop:'200px'}}>
            <footer className="footer" ref={ref}  style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }} >
                  <img src="/images/wave.png" alt="" className="w-100 imgResp" style={{height:'135px'}}/>
          <div className="container-fluid w-75 d-flex justify-content-end" style={{marginTop: "-50px",
    position: "absolute"
}}>
            
<div className="m-auto d-flex" >
            <h3 className="me-5 respH3"> &copy; 2024</h3>
</div>
                  <span className="me-3 mt-2 followRes">Follow for more!</span>
                  <div className="d-flex">

                   <Link to='https://instagram.com/markcoder_?igshid=OGQ5ZDc2ODk2ZA==' className="text-decoration-none me-2">
                   <img src="/images/instagram.png" alt="" style={{width:'38px'}}/>
                    </Link> 
                  <td>
                    <Link to='https://www.linkedin.com/in/devleopermark/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' className="text-decoration-none">

                            <img src="/images/linkdin.png" alt="" style={{width:'38px'}}/>
                    </Link>
                    </td>
                  </div>
                    </div>
        </footer>
        </div>
    )
}