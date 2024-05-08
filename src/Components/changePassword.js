import React from 'react'
import Nav from './Navbar';
import Profileimg from '../assets/icons/profileimg.png'
import { Link } from 'react-router-dom'
function changePassword( {Toggle} ) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <div className='d-flex flex-row p-4 mt-5 w-75 ms-auto me-auto '>
                <div className='bg-light rounded w-25 me-1 d-flex flex-column shadow '>
                    <img className='ms-auto me-auto mt-3' src={Profileimg} alt="Profile" style={{height:125, width:125}} />
                    <h1 className='ms-auto me-auto'>Profile</h1>
                    <Link to={'/profile'}  className='text-dark  text-center h-100 mb-1  text-decoration-none list-group-item list-group-item-primary list-group-item-action'>                  
                        <span >My Profile</span>       
                    </Link> 
                    <Link to={'/editProfile'}  className='text-dark  text-center h-100 mb-1  text-decoration-none list-group-item list-group-item-primary list-group-item-action'>                  
                        <span >Edit Profile</span>       
                    </Link> 
                    <Link to={'/changePassword'}  className='text-dark  text-center h-100 mb-1  text-decoration-none list-group-item list-group-item-primary list-group-item-action'>                  
                        <span >Change Password</span>       
                    </Link> 
                </div>
                <div className="container bg-light rounded p-5 w-75 shadow">
                <form action="" id="profileForm">
                    <div className="d-flex flex-column">
                        
                        <label for="password">Old Password:</label>
                        <input type="password" name="password" required></input>

                        <label for="name">Old Password Again:</label>
                        <input type="password" name="password-again"  required></input>
                        
                        <label for="name">New Password:</label>
                        <input type="password" name="new-password"  required></input>
                    
                        <div className='text-center'>
                        <button className='btn btn-primary mt-2' onclick="submitForm()">Submit</button>
                    </div>
                    </div>
                    
                    
                </form>
        </div>
        </div>
      </div>
      )
}

export default changePassword