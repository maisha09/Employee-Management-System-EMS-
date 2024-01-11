import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './style.css'; 

function Home() {
  const [employeeCount, setEmployeeCount] = useState();
  const [salary, setSalary] = useState();

  useEffect(() => {
    axios.get('http://localhost:8081/employeeCount')
      .then(res => {
        setEmployeeCount(res.data[0].employee);
      })
      .catch(err => console.log(err));

    axios.get('http://localhost:8081/salary')
      .then(res => {
        setSalary(res.data[0].sumOfSalary);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
  <div className='box p-3'>
    <div className='text-center'>
      <h4><strong>Employee</strong></h4>
    </div>
    <hr />
    <div>
      <h5><strong>Total: {employeeCount}</strong></h5>
    </div>
  </div>
  <div className='box p-3'>
    <div className='text-center'>
      <h4><strong>Salary</strong></h4>
    </div>
    <hr />
    <div>
      <h5><strong>Total: {salary}</strong></h5>
    </div>
  </div>
</div>


      <div className='mt-4 px-5 pt-3'>
  <h3 className="text-white">List of Admins</h3>
  <table className='table table-secondary table-bordered table-striped'>
    <thead className='thead-dark'>
      <tr>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>admin@gmail.com</td>
        <td>
          <button className='btn btn-dark btn-sm'>Admin</button>
        </td>
        
      </tr>
      {/* Add more rows as needed */}
      <tr>
        <td>hr@gmail.com</td>
        <td>
          <button className='btn btn-dark btn-sm'>HR</button>
        </td>
        
      </tr>
      
    </tbody>
  </table>
</div>

    </div>
  );
}

export default Home;
