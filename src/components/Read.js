import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Delete from './Delete';  

function Read() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData')
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Link to="/create">
        <button type='button' className="btn btn-primary">Add User Data</button>
      </Link>
    <div className="container mt-5 btn-group">
       
      &nbsp;&nbsp;
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>User First Name</th>
            <th>User Last Name</th>
            <th>CheckBox</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.checkbox ? 'true' : 'false'}</td>
              <td>
              &nbsp;&nbsp;
                <Link to={`/update/${item.id}`}>
                  <button className="btn btn-secondary"> Update </button>
                </Link>
                &nbsp;&nbsp;
                <Delete id={item.id} onDelete={handleDelete} />
                &nbsp;&nbsp;
                <Link to={`/view/${item.id}`}>
                  <button className="btn btn-info"> View </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}

export default Read;
