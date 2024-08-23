import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Create() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [checkbox, setCheckbox] = useState(false); // Default is false (unchecked)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData', {
      firstName,
      lastName,
      checkbox // Include checkbox value in the data to be sent
    }).then((response) => {
      console.log(response);
      navigate('/');
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Add User Record</h2>
      <br/>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <input 
            type="text" 
            className="form-control"
            placeholder="First Name" 
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
          />
        </div>
        <br/>
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
          <input 
            type="checkbox" 
            className="form-check-input" 
            checked={checkbox}
            onChange={(e) => setCheckbox(e.target.checked)} // Toggle checkbox value
          />
          <label className="form-check-label">I agree Terms and Conditions</label>
        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
        &nbsp; &nbsp; &nbsp;
        <button className="btn btn-secondary" onClick={() => navigate('/')}>
          Back to List
        </button>
      </form>
    </div>
  );
}

export default Create;
