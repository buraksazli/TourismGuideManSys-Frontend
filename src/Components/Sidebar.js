import React from 'react'
import { useState , useEffect } from 'react';
import logo from '../assets/icons/logo.png'
import { Link , useLocation } from 'react-router-dom'
import '../App.css'
import ProfileImage from './ProfileImage'
import { Collapse } from 'react-bootstrap';
function Sidebar(){ 
    const location = useLocation();
    const userName = localStorage.getItem('username');
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
      setOpen(!open);
    };
    const currentPage = location.pathname;

  return (
    <>
    <header>
       <nav
       id="sidebarMenu"
       className="collapse d-lg-block  sidebar collapse bg-white"
       >
    <div className="position-sticky ">
      <div className="list-group list-group-flush mx-2 mt-4 pt-4">
              
                  <Link
                to={'/home'}
                className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action'
                style={currentPage === '/home' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white", color:"black" }}
                >        
                        <i className='bi bi-house fs-5 me-3' style={currentPage === '/home' ? {color:"#f36944" } : { color:"#f36944" }}></i>       
                        <span >Home</span>       
                </Link>   
                 
                <Link 
                to={'/admins'} 
                className={` text-decoration-none ps-3 list-group-item p-2 list-group-item list-group-item-light rounded list-group-item-action`} 
                style={currentPage === '/admins' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                >     
                        <i class="bi bi-person-gear fs-5 me-3 " style={currentPage === '/admins' ? {color:"#f36944" } : { color:"#f36944" }}></i>         
                        <span >Admins</span>      
                </Link>
                <Link to={'/tourists'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/tourists' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >      
                        <i className='bi bi-person fs-5 me-3' style={currentPage === '/tourists' ? {color:"#f36944" } : { color:"#f36944" }}></i>         
                        <span >Tourists</span>      
                </Link> 
                <Link 
                    to={'/guide'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/guide' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >           
                        <i className='bi bi-people fs-5 me-3' style={currentPage === '/guides' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Guides</span>     
                </Link>
                <Link 
                    to={'/companies'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/companies' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >           
                        <i className='bi bi-building fs-5 me-3' style={currentPage === '/guides' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Companies</span>     
                </Link>
                <Link to={'/confirmGuide'}  
                    className=' text-decoration-none ps-3  p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/confirmGuide' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >         
                        <i className='bi bi-person-check fs-5 me-3' style={currentPage === '/confirmGuide' ? {color:"#f36944" } : { color:"#f36944" }}></i>       
                            <span >Guide Confirmation</span>     
                
                </Link>
                <div
                onClick={handleToggle}
                className='text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action'
                style={currentPage === '/tours' || currentPage === '/currentTours' ? {
                  backgroundColor: "#e6e7e8",
                  color: "black",
                  borderLeft: "solid",
                  borderLeftWidth: "4px",
                  borderLeftColor: "#f36944"
                } : {
                  backgroundColor: "white",
                  color: "black"
                }}
              >
                <div className='d-flex'>
                <i className='bi bi-globe-americas fs-5 me-3' style={currentPage === '/tours' ? { color: "#f36944" } : { color: "#f36944" }}></i>
                <div className='pt-1 d-flex justify-content-between w-100'>
                  <div>Tours</div>
                  <div ><i class="bi bi-caret-down-fill text-dark"></i></div>
                </div>
                </div>
              </div>
              
              <Collapse in={open}>
                <div className="ms-2">
                  <Link 
                    to="/currentTours"
                    className='d-block text-decoration-none  p-2 list-group-item list-group-item-light list-group-item-action'
                    style={{ backgroundColor: "white", color: "black" }}
                  >
                  <i class="bi bi-caret-right-fill text-dark"></i>  Ongoing Tours
                  </Link>
          <Link 
            to="/tours"
            className='d-block text-decoration-none  p-2 list-group-item list-group-item-light list-group-item-action'
            style={{ backgroundColor: "white", color: "black" }}
          >
            <i class="bi bi-caret-right-fill text-dark"></i>Completed Tours
          </Link>
        </div>
      </Collapse>
                <Link to={'/reportedRatings'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/reportedRatings' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-exclamation-circle fs-5 me-3' style={currentPage === '/reportedRatings' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Reported Ratings</span>    
                </Link>
                <Link 
                    to={'/profile'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/profile' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-person-circle fs-5 me-3' style={currentPage === '/profile' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Profile</span>    
                </Link>
                <Link 
                    to={'/login'}  
                    className='  text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/login' ? { backgroundColor: "#11c4ae" } : { backgroundColor:"white" }}
                    >
                        <i className='bi bi-power fs-5 me-3' style={{ color:"#f36944" }}></i>    
                        <span className='text-dark'>Logout</span>       
                </Link> 
                
                <div className="text-center mt-2  border  rounded p-2" >  
                
             
                        <b >Welcome @{userName}</b>                          
                </div> 
        
      </div>
    </div>
  </nav>
  <nav
       id="main-navbar"
       className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
       >
    <div className="container-fluid">
     
      <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
              >
        <i className="fas fa-bars"></i>
      </button>

      <div className="navbar-brand ms-4" href="#">
        <img src={logo} alt="Logo" style={{height:40, width:40, backgroundColor: "white"}} />TGMS
      </div>
      
      <Link to={'/login'} >  
        <div className='border p-2 rounded-5 me-3 border-danger  hover'>
          <i class="bi bi-box-arrow-right text-light "></i> <span className='text-light'>Logout</span>
        </div>
      </Link>
    </div>

  </nav>
    </header>

  <main style={{marginTop: "58px"}}>
    <div className="container pt-4">
        
    </div>
    </main>
    </>
  );
}

export default Sidebar 
