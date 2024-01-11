import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Import the CSS file

function AddEmployee() {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    salary: '',
    image: ''
  });
  const [emailError, setEmailError] = useState(false); // State to track email validation
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate email format
    if (!isValidEmail(data.email)) {
      setEmailError(true);
      return;
    } else {
      setEmailError(false);
    }

    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('password', data.password);
    formdata.append('address', data.address);
    formdata.append('salary', data.salary);
    formdata.append('image', data.image);

    axios
      .post('http://localhost:8081/create', formdata)
      .then((res) => {
        navigate('/employee');
      })
      .catch((err) => console.log(err));
  };

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className='d-flex flex-column align-items-center pt-4'>
      <h2><strong>Add Employee</strong></h2>
      <form className='row g-3 w-50' onSubmit={handleSubmit}>
        <div className='col-12'>
          <label htmlFor='inputName' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='inputName'
            placeholder='Enter Name'
            autoComplete='off'
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='inputEmail4' className='form-label'>
            Email<span className='required-field'>*</span>
          </label>
          <input
            type='email'
            className={`form-control ${emailError ? 'is-invalid' : ''}`}
            id='inputEmail4'
            placeholder='Enter Email'
            autoComplete='off'
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          {emailError && (
            <div className='invalid-feedback email-error'>Please enter a valid email address.</div>
          )}
        </div>
        <div className='col-12'>
          <label htmlFor='inputPassword4' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-control'
            id='inputPassword4'
            placeholder='Enter Password'
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='inputSalary' className='form-label'>
            Salary
          </label>
          <input
            type='text'
            className='form-control'
            id='inputSalary'
            placeholder='Enter Salary'
            autoComplete='off'
            onChange={(e) => setData({ ...data, salary: e.target.value })}
          />
        </div>
        <div className='col-12'>
          <label htmlFor='inputAddress' className='form-label'>
            Address
          </label>
          <input
            type='text'
            className='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
            autoComplete='off'
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div className='col-12 mb-3'>
          <label className='form-label' htmlFor='inputGroupFile01'>
            Select Image
          </label>
          <input
            type='file'
            className='form-control'
            id='inputGroupFile01'
            onChange={(e) => setData({ ...data, image: e.target.files[0] })}
          />
        </div>
        <div className='col-12'>
          <button type='submit' className='btn btn-primary'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddEmployee;
