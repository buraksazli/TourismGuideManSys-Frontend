import React from 'react'
import Sidebar from '../Components/Sidebar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../App.css';
import CompanyList from '../Components/CompanyList';
function CompanyPage() {
  return (
    <>
    <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
          <div className=' d-flex flex-row mt-5'>  
          <div>           
            <Sidebar />                    
            </div>
          
            <div className='mt-5 card p-1 pt-4 w-100 me-3'>          
                  <CompanyList />                  
            </div> 
        </div> 
    </div>   
    </>
  )
}

export default CompanyPage