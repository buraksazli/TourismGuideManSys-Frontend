import React from 'react'
import 'bootstrap/js/dist/dropdown'

import 'bootstrap/js/dist/collapse'
function Nav({Toggle}) { 
     return ( 

           <nav className="navbar navbar-expand-lg shadow-none  navbar-dark bg-transparent">
                        
                <i className="navbar-brand bi bi-justify-left fs-4 text-dark " onClick={Toggle}></i>      
                 <div className="navbar-nav ms-auto mt-2 mt-lg-0 border  rounded p-2" style={{color: "#435ebe"}}>           
                        <b style={{color: "#435ebe"}}>Welcome Burak</b>                          
                </div>          
                   
           </nav>  
        
        )
    }
    
export default Nav