import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Home from './Home';
import Alerts from './Alerts';
import Profile from './Profile';
import './DonorDashboard.css'

const DonorDashboard = () => {
  // handle logout function could clear auth etc.
  const handleLogout = () => {
    alert('Logging out...');
    // Add your auth clearing logic here
  };

  return (
    <>
      <Navbar onLogout={handleLogout} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
};

export default DonorDashboard;
