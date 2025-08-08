import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css'; // you can reuse or create a separate HospitalNavbar.css

const HospitalNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic for logout (clear session etc.)
    navigate('/login/hospital/');
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Hospital Panel</div>
      <ul className="nav-links">
        <li><NavLink to="/hospital/info">Info</NavLink></li>
        <li><NavLink to="/hospital/blooddata">Blood Data</NavLink></li>
        <li><NavLink to="/hospital/bloodbanks">Blood Banks</NavLink></li>
        <li><NavLink to="/hospital/donors">Donors</NavLink></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
};

export default HospitalNavbar;
