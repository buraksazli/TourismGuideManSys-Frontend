import React from 'react'

function ProfileEdit({ Toggle }) {
    return (
        <div className='px-3'>
            <Nav Toggle={Toggle} />
            <div className='d-flex flex-row p-4 mt-5 w-75 ms-auto me-auto '>
                <div className='bg-light rounded w-25 me-1 d-flex flex-column shadow '>
                    <img className='ms-auto me-auto mt-3' src={Profileimg} alt="Profile" style={{height:125, width:125}} />
                    <h1 className='ms-auto me-auto'>Profile</h1>
                    <button className='btn btn-primary m-1'>My Profile</button>
                    <button className='btn btn-primary m-1'>Edit Profile</button>
                    <button className='btn btn-primary m-1'>Change Password</button>
                </div>
                <div className="container bg-light rounded p-5 w-75 shadow">
                <form action="" id="profileForm">
                    <div className="d-flex flex-column">
                        <div className='d-flex flex-row justify-content-between'>
                            <div className='d-flex flex-column w-100 me-2'>
                                <label  for="name">First Name:</label>
                                <input type="text" name="name" id="name" placeholder='Burak'  required></input>
                            </div>
                            <div className='d-flex flex-column w-100'>
                                <label for="name">Last Name:</label>
                                <input type="text" name="name" id="name" placeholder='Sazlı' required></input>
                            </div>
                        </div>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder='buraksazli@gmail.com' required></input>

                        <label for="name">Phone Number:</label>
                        <input type="text" name="name" id="name" placeholder='5512028390' required></input>
                        
                        <label for="name">BirthDate:</label>
                        <input type="text" name="name" id="name" placeholder='1999-05-08' required></input>
                    </div>
                    <button className='btn btn-primary mt-2 mb-3' onclick="submitForm()">Submit</button>
                </form>
        </div>
        </div>
      </div>
      )
}

export default ProfileEdit