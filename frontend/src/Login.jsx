import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  
   const navigate = useNavigate()
  axios.defaults.withCredentials= true;
   
  const [error,setError] = useState('')
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then(res => {
        if(res.data.Status === 'Success') {
          navigate('/');

      }else {
        setError(res.data.Error);
      } 
    })
      .catch(err => console.log(err));
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 loginPage'>
    <h2 style={{ color: 'white', textAlign: 'center', marginBottom: '20px' }}>Welcome Admin</h2>
    <div className='p-3 rounded w-25 border loginForm'>
      <div className='text-danger'>
        {error && error}
      </div>
      {/* <div className="d-flex justify-content-center mb-3">
        <img src='ADN.png' alt='Logo' className='logo' />
      </div> */}
      <h2 style={{ color: 'white', textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label style={{ color: 'white' }} htmlFor="email"><strong>Email</strong></label>
          <input
            type="email"
            placeholder='Enter Email'
            name='email'
            onChange={e => setValues({ ...values, email: e.target.value })}
            className='form-control rounded-0'
            autoComplete='off'
          />
        </div>
        <div className='mb-3'>
          <label style={{ color: 'white' }} htmlFor="password"><strong>Password</strong></label>
          <input
            type="password"
            placeholder='Enter Password'
            name='password'
            onChange={e => setValues({ ...values, password: e.target.value })}
            className='form-control rounded-0'
          />
        </div>
        <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
      </form>
    </div>
</div>

)
}

export default Login

