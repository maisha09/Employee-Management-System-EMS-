import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Start() {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState('');

  const handleUserTypeChange = (event) => {
    setSelectedUserType(event.target.value);
  };

  const handleOkClick = () => {
    if (selectedUserType === 'employee') {
      navigate('/employeeLogin');
    } else if (selectedUserType === 'admin') {
      navigate('/login');
    }
  };


    return (
      <div className='d-flex justify-content-center align-items-center vh-100 loginPage' style={{ backgroundColor: 'black' }}>
        <div className='p-3 rounded w-25 border loginForm text-center'>
          <h2 style={{ color: 'white' }}>Login As</h2>
          <div className='d-flex flex-column align-items-center mt-5'>
            <select
              className='form-select form-select-lg mb-3'
              value={selectedUserType}
              onChange={handleUserTypeChange}
            >
              <option value='' disabled>Select User Type</option>
              <option value='employee'>Employee</option>
              <option value='admin'>Admin</option>
            </select>
            <button className='btn btn-primary btn-lg' onClick={handleOkClick}>Ok</button>
          </div>
        </div>
      </div>
    );
  }
  

export default Start;
