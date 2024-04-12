import React from 'react';
import logo from '../assets/icons/logo.png'
import { useState } from 'react';
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =  (e) => {
    e.preventDefault(); 

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = '/home';    
  };

  return (
    <>
    <div className='d-flex flex-column pb-5 w-25 ' >

      <div className='d-flex flex-row justify-content-center'>
        <img src={logo} alt="Logo" style={{height:75, width:75}} /> 
        <h3 className='pt-3' ><b>Login</b></h3>
      </div>
      <form  onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          
          <input type="email" className="form-control h-100" style={{backgroundColor: "#e4e5f1"}} id="InputEmail1"  onChange={(e) => setUsername(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"></input>
          
        </div>
        <div className="form-group mt-3">
          
          <input type="password" className="form-control" style={{backgroundColor: "#e4e5f1"}} id="InputPassword1"  onChange={(e) => setPassword(e.target.value)}  placeholder="Password"></input>
        </div>
        <div className='d-flex justify-content-center mt-3'>
        <button type="submit" className="btn btn-primary w-100">Login</button>
        </div>
      </form>

     </div>
    </>
  );
}

export default Login