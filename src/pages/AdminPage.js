import React from 'react'
import AdminList from '../Components/AdminList';
import Sidebar from '../Components/Sidebar'
import { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../App.css';
function AdminPage() {
    const [toggle, setToggle] = useState(true);
    const Toggle = () => {        
        setToggle(!toggle)    
    }
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
        <div className='row '>        
          <Sidebar />         
           <div className='col-4 col-md-2'></div>     
            <div className='col'>          
                <AdminList />                  
            </div> 
        </div>  
      </div>  
    </>
  );
}

export default AdminPage