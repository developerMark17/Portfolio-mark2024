import { useRef } from "react";
import {useInView} from 'framer-motion';
import './contactResponsive.css';
export function Contact(){
    const ref = useRef(null);
    const isInView = useInView(ref);
    return(
        
        <div className=" resp w-50 m-3 d-flex justify-content-between m-auto p-3" id="contact"
        style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }} ref={ref}>
            
       
            <div className="d-flex">
              <h2 className="justify-content-center">Contact</h2>
            
            <div className="contactResp w-50 m-3 p-2" style={{position:'relative',top:"50px"}}> 
            <div class="mb-3 labelResp">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3 labelResp">
  <label for="exampleFormControlTextarea1" class="form-label">Query</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

            </div>
            <div style={{position:'relative',top:"90px"}} >

            <img src="/images/Contact-1.gif" className="resImg w-50" alt="" />
            </div>
            </div>
        </div>
    )
}