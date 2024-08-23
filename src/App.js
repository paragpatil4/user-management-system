import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import View from './components/View';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <h1 className="text-bg-secondary">User Management System</h1><br/>
      <h2 className="text-center mb-4">Users List</h2>
    <Router>
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/view/:id" element={<View />} /> {/* Add the View route */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
