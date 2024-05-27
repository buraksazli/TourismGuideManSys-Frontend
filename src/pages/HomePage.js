import React from 'react'

import Sidebar from '../Components/Sidebar'

import 'bootstrap-icons/font/bootstrap-icons.css'

import Home from '../Components/Home'

import { useState, useRef, useEffect } from 'react'
import '../App.css';
function HomePage() {
 
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
        <div className='row '>        
          <Sidebar />         
           <div className='col-4 col-md-2'></div>     
            <div className='col'>          
                <Home />                  
            </div> 
        </div>  
      </div>  
    </>
  );
}

export default HomePage