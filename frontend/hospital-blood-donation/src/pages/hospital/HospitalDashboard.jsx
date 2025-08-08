// HospitalDashboard.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import HospitalNavbar from '../../components/HospitalNavbar';

const HospitalDashboard = () => (
  <>
    <HospitalNavbar />
    <main>
      <Outlet />
    </main>
  </>
);

export default HospitalDashboard;
