import React from 'react'
import ProfileEdit from '../Components/ProfileEdit'
import Sidebar from '../Components/Sidebar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState  } from 'react';
function EditProfilePage() {
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {        
        setToggle(!toggle)    
    }
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#d3d5e8"}}>
        <div className='row '>        
           
          <Sidebar />     
        </div>      
          <div className='col-4 col-md-2'></div>      
            <div className='col'>          
                <ProfileEdit />                  
            </div> 
        </div>  
      
    </>
  );
}

export default EditProfilePage