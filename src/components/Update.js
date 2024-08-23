import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
  const { id } = useParams();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
      firstName,
      lastName,
    }).then((response) => {
      console.log(response);
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">React Crud Operations</h2>
      <form onSubmit={handleUpdate} className="mt-4">
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="First Name" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>
        <div className="form-group mt-3">
          <input 
            type="text" 
            className="form-control"
            placeholder="Last Name" 
            value={lastName} 
            onChange={(e) => setLastName(e.target.value)} 
          />
        </div>
        <div className="form-check mt-3">
          <input type="checkbox" className="form-check-input" required checked />
          <label className="form-check-label">I agree to the Terms and Conditions</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mt-3">Update</button>
      </form>
    </div>
  );
}

export default Update;
