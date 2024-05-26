import React from 'react'

import Sidebar from '../Components/Sidebar'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Home from '../Components/Home'

import { useState, useRef, useEffect } from 'react'
import '../App.css';
function HomePage() {
    const [toggle, setToggle] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    const Toggle = () => {        
        setToggle(!toggle)    
    };

    const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    if (isSmallScreen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSmallScreen]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
        <div className='row' >        
        {toggle && <div className='col-6 col-md-2  vh-100 position-fixed '  style={{backgroundColor: "white "}} ref={sidebarRef}>      
          <Sidebar />     
                      </div>}        
          {toggle &&  <div className='col-6 col-md-2 '></div>}         
            <div className='col'>          
                <Home Toggle={Toggle}/>                  
            </div> 
        </div>  
      </div>  
    </>
  );
}

export default HomePage