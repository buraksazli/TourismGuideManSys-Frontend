import React from 'react'
import logo from '../assets/icons/logo.png'
import { BrowserRouter ,  Link } from 'react-router-dom'

function Sidebar(){ 
    function handleClick() {
        localStorage.setItem('username', '');
        localStorage.setItem('password', '');
    }

    return (    
        <div className='bg-white sidebar p-2'>    
            <div className='m-2'>     
                <img src={logo} alt="Logo" style={{height:75, width:75}} />     
                <span className='brand-name fs-4 font-weight-bold'>TGMS</span>  
            </div>     
            <hr className='text-dark' />     
            <div className='list-group list-group-flush'>      
                <a className='list-group-item py-2'>           
                    <i className='bi bi-speedometer2 fs-5 me-3'></i>       
                    <span >Dashboard</span>       
                </a>        
                <a className='list-group-item py-2 '>     
                    <i className='bi bi-house fs-5 me-3'></i>         
                    <span >Home</span>      
                </a>            
                <a className='list-group-item py-2'>          
                    <i className='bi bi-table fs-5 me-3'></i>        
                        <span >Products</span>     
                </a>       
                <a className='list-group-item py-2'>        
                    <i className='bi bi-clipboard-data fs-5 me-3'></i>       
                        <span >Report</span>     
                </a>        
                <a className='list-group-item py-2'>        
                    <i className='bi bi-people fs-5 me-3'></i>        
                        <span >Customers</span>    
                </a>      
                    <Link to={'/login'} onClick={handleClick} className='text-dark text-decoration-none ps-3'>
                        <i className='bi bi-power fs-5 me-3'></i>    
                        Logout       
                    </Link>
            </div>  
        </div>  
    )
}

export default Sidebar 
