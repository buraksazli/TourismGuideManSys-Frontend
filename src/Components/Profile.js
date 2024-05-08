import React from 'react'
import Nav from './Navbar';
import Profileimg from '../assets/icons/profileimg.png'
import { Link } from 'react-router-dom'

function Profile({ Toggle }) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />
        <div className='d-flex flex-row p-4 mt-5 w-75 ms-auto me-auto  '>
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
            <div className="container bg-light rounded p-5 w-75 shadow ">
                <form action="" id="profileForm">
                    <div className="d-flex flex-column">
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-column w-100 me-2'>
                                <label  for="name">First Name:</label>
                                <input type="text" name="name" id="name" placeholder='Burak'  disabled></input>
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label for="name">Last Name:</label>
                                <input type="text" name="name" id="name" placeholder='Sazlı' disabled></input>
                            </div>
                        </div>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='buraksazli@gmail.com' disabled></input>

                        <label for="name">Phone Number:</label>
                        <input type="text" name="name" id="name" placeholder='5512028390' disabled></input>
                        
                        <label for="name">BirthDate:</label>
                        <input type="text" name="name" id="name" placeholder='1999-05-08' disabled></input>
                    </div>

                </form>
        </div>
    </div>
  </div>
  )
}

export default Profile