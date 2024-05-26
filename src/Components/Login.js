import React from 'react';
import logo from '../assets/icons/logo.png'
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
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
    
    <div className="Auth-form-container" style={{backgroundColor:"#f1f2f4"}}>
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
        <div className='d-flex flex-row justify-content-center'>
          <img src={logo} alt="Logo" style={{height:60, width:60}} /> 
          <h3 className="Auth-form-title mt-3">Login</h3></div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
          
        </div>
      </form>
    </div>

    </>
  );
}

export default Login