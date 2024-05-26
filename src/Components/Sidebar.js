import React from 'react'
import logo from '../assets/icons/logo.png'
import { Link , useLocation } from 'react-router-dom'

function Sidebar(){ 
    const location = useLocation();


  const currentPage = location.pathname;

        return (    
        <div className='p-1' style={{backgroundColor: "white"}}>    
            <div className='m-2 text-center'>     
                <img src={logo} alt="Logo" style={{height:75, width:75, backgroundColor: "white"}} />    
                <div className='pe-3'>
                    <span className='brand-name fs-4 font-weight-bold text-dark'><b>TGMS</b></span>  
                </div> 
            </div>     
            <hr className='text-dark' />
                <div className=''>
                <Link
                to={'/home'}
                className={`   text-decoration-none ps-3 list-group-item p-2 list-group-item list-group-item-light rounded list-group-item-action`}
                style={currentPage === '/home' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white", color:"black" }}
                >        
                        <i className='bi bi-house fs-5 me-3' style={currentPage === '/home' ? {color:"#f36944" } : { color:"#f36944" }}></i>       
                        <span >Home</span>       
                </Link>   
                </div> 
                <div className=''>
                <Link 
                to={'/admins'} 
                className={` text-decoration-none ps-3 list-group-item p-2 list-group-item list-group-item-light rounded list-group-item-action`} 
                style={currentPage === '/admins' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                >     
                        <i class="bi bi-person-gear fs-5 me-3 " style={currentPage === '/admins' ? {color:"#f36944" } : { color:"#f36944" }}></i>         
                        <span >Admins</span>      
                    </Link>   
                </div>
                <div className=''>  
                    <Link to={'/tourists'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/tourists' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >      
                        <i className='bi bi-person fs-5 me-3' style={currentPage === '/tourists' ? {color:"#f36944" } : { color:"#f36944" }}></i>         
                        <span >Tourists</span>      
                    </Link>   
                </div>
                <div className=''>         
                    <Link 
                    to={'/guide'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/guide' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >           
                        <i className='bi bi-people fs-5 me-3' style={currentPage === '/guides' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Guides</span>     
                    </Link>      
                </div>
                <div className=''> 
                    <Link to={'/confirmGuide'}  
                    className=' text-decoration-none ps-3  p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/confirmGuide' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >         
                        <i className='bi bi-person-check fs-5 me-3' style={currentPage === '/confirmGuide' ? {color:"#f36944" } : { color:"#f36944" }}></i>       
                            <span >Guide Confirmation</span>     
                    </Link>   
                </div>
                <div className=''>     
                    <Link 
                    to={'/tours'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/tours' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-globe-americas fs-5 me-3' style={currentPage === '/tours' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Tours</span>    
                    </Link> 
                </div>
                <div className=''>
                    <Link to={'/reportedRatings'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/reportedRatings' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-exclamation-circle fs-5 me-3' style={currentPage === '/reportedRatings' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Reported Ratings</span>    
                    </Link>   
                </div>
                <div className=''>
                    <Link 
                    to={'/profile'}  
                    className=' text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/profile' ? { backgroundColor: "#e6e7e8",color:"black",borderLeft: "solid", borderLeftWidth: "4px", borderColor:"#f36944" } : { backgroundColor:"white",color:"black" }}
                    >       
                        <i className='bi bi-person-circle fs-5 me-3' style={currentPage === '/profile' ? {color:"#f36944" } : { color:"#f36944" }}></i>        
                            <span >Profile</span>    
                    </Link>
                </div>
                <div className=''>
                    <Link 
                    to={'/login'}  
                    className='  text-decoration-none ps-3 p-2 list-group-item list-group-item-light list-group-item-action' 
                    style={currentPage === '/login' ? { backgroundColor: "#11c4ae" } : { backgroundColor:"white" }}
                    >
                        <i className='bi bi-power fs-5 me-3' style={{ color:"#f36944" }}></i>    
                        Logout       
                    </Link>
                </div>
            </div>  
         
    )
}

export default Sidebar 
