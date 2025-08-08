import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonorLogin.css';

const DonorLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log inputs and navigate to Home or donor dashboard (later)
    console.log('Donor Login:', { email, password });
    alert('Login submitted! (You can add real auth later)');
    // navigate('/donor/dashboard'); // example
  };

  return (
    <div className="donor-login-container">
      <form className="donor-login-form" onSubmit={handleSubmit}>
        <h2>Donor Login</h2>

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
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

export default DonorLogin;
