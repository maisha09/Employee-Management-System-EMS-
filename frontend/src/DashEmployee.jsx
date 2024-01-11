import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EmployeeDetail() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [employee, setEmployee] = useState([])
    useEffect(()=> {
        axios.get('http://localhost:8081/get/'+id)
        .then(res => setEmployee(res.data.Result[0]))
        .catch(err => console.log(err));
    })
    const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
  return (
    
    <div className='d-flex justify-content-center flex-column align-items-center mt-3'>
  <img
    src={`http://localhost:8081/images/` + employee.image}
    alt=""
    className='empImg'
    style={{ width: '300px', height: '350px', marginBottom: '0' }} // Adjust the width and height as needed, and set margin-bottom to 0
  />
  <div className='d-flex align-items-center flex-column mt-2'> {/* Adjust the margin-top as needed */}
    <h3>Name: {employee.name}</h3>
    <h3>Email: {employee.email}</h3>
    <h3>Salary: {employee.salary}</h3>
  </div>
  <div>
    {/* <button className='btn btn-dark me-2'>Edit</button>
    <button className='btn btn-secondary' onClick={handleLogout}>Logout</button> */}
  </div>
</div>


  )
}

export default EmployeeDetail