import React from 'react';
import logo from '../assets/icons/logo.png'
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";

import { authanticateAdmin } from '../api/auth'
function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await authanticateAdmin(email, password);
      console.log(response);
      if(response.succeeded) {
        localStorage.setItem('Token', response.data.jwToken);
        setLoggedIn(true);
        navigate('/home');
      }      
    } catch {
        setError('Login not successful');
    }
  };

  return (
    <>
    
    <div className='d-flex flex-column pb-5 col-md-3 col-md-offset-1 col-xs-12 ' >

      <div className='d-flex flex-row justify-content-center'>
        <img src={logo} alt="Logo" style={{height:75, width:75}} /> 
        <h3 className='pt-3' ><b>Login</b></h3>
        
      </div>{error && <p className='text-danger m-auto'>{error}</p>}
      <form  onSubmit={handleSubmit}>
        <div className="form-group mt-3 ">
          
          <input type="email" className="form-control h-100 " style={{backgroundColor: "#e4e5f1"}} id="email"  value={email} onChange={(e) => setEmail(e.target.value)} aria-describedby="emailHelp" placeholder="Enter email"></input>
          
        </div>
        <div className="form-group mt-3">
          
          <input type="password" className="form-control" style={{backgroundColor: "#e4e5f1"}} id="password"  value={password} onChange={(e) => setPassword(e.target.value)}  placeholder="Enter Password"></input>
        </div>
        <div className='d-flex justify-content-center mt-3'>
          <button type="submit" className="btn btn-dark w-100">Login</button>
        </div>
      </form>

     </div>

    </>
  );
}

export default Login