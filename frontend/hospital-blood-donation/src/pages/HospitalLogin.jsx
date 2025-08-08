import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HospitalLogin.css';

const HospitalLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Hospital Login:', { email, password });
    alert('Hospital login submitted! (Add real auth later)');
    // navigate('/hospital/dashboard'); // future route
  };

  return (
    <div className="hospital-login-container">
      <form className="hospital-login-form" onSubmit={handleSubmit}>
        <h2>Hospital Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="hospital@example.com"
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>

        <button type="button" className="back-btn" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </form>
    </div>
  );
};

export default HospitalLogin;
