import React from 'react'
import Sidebar from '../Components/Sidebar'
import Tourists from '../Components/Tourists'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState  } from 'react';
function TouristsPage() {
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {        
        setToggle(!toggle)    
    }
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
        <div className='row '>        
        {toggle && <div className='col-4 col-md-2  vh-100 position-fixed bg-white'>      
          <Sidebar />     
                      </div>}        
          {toggle &&  <div className='col-4 col-md-2'></div>}         
            <div className='col'>          
                <Tourists Toggle={Toggle}/>                  
            </div> 
        </div>  
      </div>  
    </>
  );
}

export default TouristsPage