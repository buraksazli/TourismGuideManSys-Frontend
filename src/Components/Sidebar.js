import React from 'react'
import logo from '../assets/icons/logo.png'
import { Link } from 'react-router-dom'

function Sidebar(){ 
    function handleClick() {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
    }

    return (    
        <div className=' sidebar p-2' >    
            <div className='m-2'>     
                <img src={logo} alt="Logo" style={{height:75, width:75}} />     
                <span className='brand-name fs-4 font-weight-bold'>TGMS</span>  
            </div>     
            <hr className='text-dark' />     
            <div className='list-group border-dark'>      
                <Link to={'/home'} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>            
                    <i className='bi bi-house fs-5 me-3'></i>       
                    <span >Home</span>       
                </Link>        
                <Link to={'/tourists'} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>      
                    <i className='bi bi-person fs-5 me-3'></i>         
                    <span >Tourists</span>      
                </Link>            
                <Link to={''} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>           
                    <i className='bi bi-people fs-5 me-3'></i>        
                        <span >Guides</span>     
                </Link>       
                <Link to={'/confirmGuide'} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>         
                    <i className='bi bi-person-check fs-5 me-3'></i>       
                        <span >Guide Confirmation</span>     
                </Link>        
                <Link to={'/tours'} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>       
                    <i className='bi bi-globe-americas fs-5 me-3'></i>        
                        <span >Tours</span>    
                </Link> 
                <Link to={''} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>       
                    <i className='bi bi-exclamation-circle fs-5 me-3'></i>        
                        <span >Reported Ratings</span>    
                </Link>   
                <Link to={''} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>       
                    <i className='bi bi-person-circle fs-5 me-3'></i>        
                        <span >Profile</span>    
                </Link>
                <Link to={'/login'} onClick={handleClick} className='text-dark text-decoration-none ps-3 list-group-item list-group-item-light list-group-item-action'>
                    <i className='bi bi-power fs-5 me-3'></i>    
                    Logout       
                </Link>
            </div>  
        </div>  
    )
}

export default Sidebar 
