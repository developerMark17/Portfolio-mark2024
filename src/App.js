import { BrowserRouter, Routes,Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { Navbar } from "react-bootstrap";
import React from "react";
import { useState,useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Footer } from "./Web-React/footer/footer";
import { WebsiteProject } from "./Main/website_react";
import { HashLink as Link } from "react-router-hash-link";
function App(){
   const [progress, setProgress] = useState(0)
   const [isLoading, setIsLoading] = useState(true);
   const[theme, setTheme] = useState('')

   useEffect(() => {
     // Simulate an API call
     setTimeout(() => {
       setIsLoading(false);
     }, 2000);
   }, []);
 
   

     if (isLoading) {
       return <ClipLoader color="#36d7b7" />;
      }

      

      function handleThemeChange(e){
        if(e.target.checked){
          setTheme("bg-dark text-white")
        }else{
          setTheme("")
        }
        console.log("Theme:", theme)
      }
    
    

    return(
      
        <div className={theme}>
          <div className="overflow-x-hidden">

        <BrowserRouter>
        <header >
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        
        />
      
        
   
   
       <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
  <img src="/images/Animation6.gif" alt=""  style={{width:"66px",height:"57px"}}/>
    <button className="navbar-toggler bg-body" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse justify-content-center ${theme}`} id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/#home" className={`nav-link ms-2 ${theme}`} onClick={() => setProgress(progress + 100)}>Home</Link>
    </li>
    <li className="nav-item">
      <Link to='#skills-set' className={`nav-link ms-2 ${theme}`} onClick={() => setProgress(progress + 100)}>Skills</Link>
    </li>
    <li className="nav-item">
      <Link to='/#contact' className={`nav-link ms-2 ${theme}`} onClick={() => setProgress(progress + 100)}>Contact</Link>
    </li>
  </ul>
  <div className="form-switch">
    <input type="checkbox" className="form-check-input me-2" role="button" onChange={handleThemeChange} />
  </div>
</div>
    
  </div>
</nav>
      
      

 </header>
 
        
          <div>
            <Routes>
              <Route path="/" element={<WebsiteProject theme={theme}/>} />
              <Route path='https://github.com/airazkhan17'/>
              <Route path='https://instagram.com/markcoder_?igshid=OGQ5ZDc2ODk2ZA==' />
              <Route path='https://www.linkedin.com/in/devleopermark/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'/>
            
            </Routes>
          </div>
        <Footer theme={theme} />
        </BrowserRouter>
        
           </div>
        </div>
    )
}

export default App;

