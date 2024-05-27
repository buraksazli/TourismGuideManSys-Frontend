import React from 'react'
import logo from '../assets/icons/logo.png'
import { Link , useLocation } from 'react-router-dom'
import '../App.css'
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';
function Sidebar(){ 
    const location = useLocation();


    const currentPage = location.pathname;

  return (
    <>
    <header>
       <nav
       id="sidebarMenu"
       className="collapse d-lg-block sidebar collapse bg-white"
       >
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4 pt-4">
              
                  <Link
                to={'/home'}
                className="list-group-item list-group-item-action py-2 ripple"
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
                <Link to={'/confirmGuide'}  
                    className=' text-decoration-none ps-3  p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/confirmGuide' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >         
                        <i className='bi bi-person-check fs-5 me-3' style={currentPage === '/confirmGuide' ? {color:"#f36944" } : { color:"#f36944" }}></i>       
                            <span >Guide Confirmation</span>     
                
                </Link>
                <Link 
                    to={'/tours'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/tours' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderLeftColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-globe-americas fs-5 me-3' style={currentPage === '/tours' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Tours</span>    
                </Link>
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
                        Logout       
                </Link> 

                <div className="text-center mt-2  border  rounded p-2" >           
                        <b >Welcome Burak</b>                          
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
      <img src={logo} alt="Logo" style={{height:40, width:40, backgroundColor: "white"}} />Travely
      </div>
      <div className='border p-2 rounded-5 me-3 border-dark'><i class="bi bi-box-arrow-right"></i> Logout</div>
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
