import React from 'react'
import Nav from './Navbar';
import Profileimg from '../assets/icons/profileimg.png'

function Profile({ Toggle }) {
  return (
    <div className='px-3'>
        <Nav Toggle={Toggle} />
        <div className='d-flex flex-row p-4 mt-5'>
            <div className='bg-light rounded w-25 me-1 d-flex flex-column shadow'>
                <img className='ms-auto me-auto mt-3' src={Profileimg} alt="Profile" style={{height:125, width:125}} />
                <h1 className='ms-auto me-auto'>Profile</h1>
                <button className='btn btn-primary m-1'>My Profile</button>
                <button className='btn btn-primary m-1'>Edit Profile</button>
                <button className='btn btn-primary m-1'>Change Password</button>
            </div>
            <div className="container bg-light rounded p-5 w-75 shadow">
                <form action="" id="profileForm">
                    <div className="d-flex flex-column">
                        <label for="name">Name:</label>
                        <input type="text" name="name" id="name" required></input>

                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" required></input>

                        <label for="gender">Gender:</label>
                        <select name="gender" id="gender" required>
                        <option value="male">male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        </select>

                        <label for="age">Age:</label>
                        <input type="number" name="age" id="age" required></input>

                        <button className='btn btn-primary mt-2 mb-3' onclick="submitForm()">Submit</button>
                    </div>

                </form>
        </div>
    </div>
  </div>
  )
}

export default Profile