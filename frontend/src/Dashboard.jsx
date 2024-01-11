import React, { useEffect } from 'react'
import './style.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Dashboard() {
	const navigate = useNavigate()
	axios.defaults.withCredentials = true;
	useEffect(()=>{
		axios.get('http://localhost:8081/dashboard')
		.then(res => {
			if(res.data.Status === "Success") {
				if(res.data.role === "admin") {
					navigate('/');
				} else {
					const id = res.data.id;
					navigate('/employeedetail/'+id)
				}
			} else {
				navigate('/start')
			}
		})
	}, [])

	const handleLogout = () => {
		axios.get('http://localhost:8081/logout')
		.then(res => {
			navigate('/start')
		}).catch(err => console.log(err));
	}
	return (
		<div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a href="/" className="d-flex align-items-center pb-3 mb-md-1 mt-md-3 me-md-auto text-black text-decoration-none"> 
              <span className="fs-5 fw-bolder d-none d-sm-inline admin-interface">Admin Interface</span>
            </a>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
              <li>
                <Link to="/" data-bs-toggle="collapse" className="nav-link text-black px-0 align-middle">
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline"><strong>Dashboard</strong></span> 
                </Link>
              </li>
              <li>
                <Link to="/employee" className="nav-link px-0 align-middle text-black">
                  <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline"><strong>Employees</strong></span> 
                </Link>
              </li>
              <li>
                <Link to="profile" className="nav-link px-0 align-middle text-black">
                  <i className="fs-4 bi-person"></i> <span className="ms-1 d-none d-sm-inline"><strong>Total Count</strong></span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <a href="#" className="nav-link px-0 align-middle text-black">
                  <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline"><strong>Logout</strong></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col p-0 m-0">
          <div className='p-2 d-flex justify-content-center shadow'>
            <h4>Employee Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>


 
    
  );
};


export default Dashboard