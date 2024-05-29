import React from 'react'
import Sidebar from '../Components/Sidebar'
import TourList from '../Components/CurrentTourList'
import 'bootstrap-icons/font/bootstrap-icons.css'
import CurrentTourList from '../Components/CurrentTourList'


function CurrentTourPage() {
  return (
    <>
      <div className='container-fluid  min-vh-100 ' style={{backgroundColor: "#f1f2f4"}}>
            <div className=' d-flex flex-row mt-5'>  
            <div>           
              <Sidebar />                    
              </div>
            
              <div className='mt-5 card p-1 pt-4 w-100 me-3'>          
                    <CurrentTourList />                  
              </div> 
          </div> 
      </div>   
        
    </>
  )
}

export default CurrentTourPage