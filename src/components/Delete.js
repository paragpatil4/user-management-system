import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Delete({ id, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
      .then(() => {
        onDelete(id);  // Call the onDelete function to remove the item from the list
        navigate('/'); // Redirecting to the list view after deletion
      });
  };

  return (
    <button className="btn btn-warning" onClick={handleDelete}>
      Delete
    </button>
  );
}

export default Delete;
