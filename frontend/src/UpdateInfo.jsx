import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateInfo() {
    
  const { id } = useParams();
  const [data, setData] = useState({
    name: '',
    email: '',
    address: '',
  });
  useEffect(()=> {
    axios.get('http://localhost:8081/get/'+id)
    .then(res => {
     setData({
        name: res.data.Result[0].name,
        email: res.data.Result[0].email,
    

     })
    })
    .catch(err => console.log(err));
},[setData])
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      // Assuming your API endpoint for updating employee info is '/api/updateEmployee/:id'
      await axios.put('http://localhost:8081/update/${id}', data);
      // Handle success, e.g., show a success message or redirect to another page
      console.log('Employee info updated successfully!');
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error('Error updating employee info:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Update Employee Information</h2>
      <form className="row g-3 w-50" onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            placeholder="Enter Name"
            autoComplete="off"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputEmail4" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            placeholder="Enter Email"
            autoComplete="off"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </div>
       
       
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateInfo;
