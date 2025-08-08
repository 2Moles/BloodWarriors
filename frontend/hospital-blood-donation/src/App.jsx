import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DonorLogin from './pages/DonorLogin';
import HospitalLogin from './pages/HospitalLogin';
import DonorDashboard from './pages/donor/DonorDashboard';

import HospitalDashboard from './pages/hospital/HospitalDashboard';
import Info from './pages/hospital/Info';
import BloodData from './pages/hospital/BloodData';
import BloodbanksList from './pages/hospital/BloodbanksList';
import DonorsList from './pages/hospital/DonorsList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/donor" element={<DonorLogin />} />
        <Route path="/login/hospital" element={<HospitalLogin />} />
        <Route path="/donor/*" element={<DonorDashboard />} />

        {/* Wrap hospital pages under HospitalDashboard */}
        <Route path="/hospital" element={<HospitalDashboard />}>
          <Route path="info" element={<Info />} />
          <Route path="blooddata" element={<BloodData />} />
          <Route path="bloodbanks" element={<BloodbanksList />} />
          <Route path="donors" element={<DonorsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
