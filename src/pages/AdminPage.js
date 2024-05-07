import React from 'react'
import AdminList from '../Components/AdminList';
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
function AdminPage() {
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {        
        setToggle(!toggle)    
    }
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#d3d5e8"}}>
        <div className='row '>        
        {toggle && <div className='col-4 col-md-2  vh-100 position-fixed bg-white'>      
          <Sidebar />     
                      </div>}        
          {toggle &&  <div className='col-4 col-md-2'></div>}         
            <div className='col'>          
                <AdminList Toggle={Toggle}/>                  
            </div> 
        </div>  
      </div>  
    </>
  );
}

export default AdminPage