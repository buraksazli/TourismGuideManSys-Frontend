import React from 'react';
import logo from '../assets/icons/logo.png'
import { useState  } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://tourism-guide-man.azurewebsites.net/api/Account/authenticate-admin', {
        email,
        password
      });
      console.log('Login Successful:', response.data);
      navigate("/home");   
    } catch (error) {
      console.error('Login Error:', error);
      setError('Login not successful. ');
    }
  };

 /* const navigate = useNavigate();

  const handleClick =  (e) => {    
    e.preventDefault(); 
    

    navigate("/home");    
  };*/

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