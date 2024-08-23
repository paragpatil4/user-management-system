// src/components/View.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function View() {
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch(() => {
        navigate('/');
      });
  }, [id, navigate]);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Details</h2>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
          <p className="card-text"><strong>CheckBox: </strong>{employee.checkbox}</p>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>
            Back to List
          </button>
          
        </div>
      </div>
    </div>
  );
}

export default View;
