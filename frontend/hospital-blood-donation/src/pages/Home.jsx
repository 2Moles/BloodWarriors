import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="content">
        <h1>🏥 Blood Warriors</h1>
        <p>
          Welcome to our hospital blood donation portal. Every drop counts — and your contribution
          can help save lives. Join our mission to ensure safe and sufficient blood supply for those
          in urgent need.
        </p>

        <p>
          Are you here to <strong>donate blood</strong> or <strong>request it</strong> for a hospital?
          Choose an option below to get started.
        </p>

        <div className="buttons">
          <button onClick={() => navigate('/login/donor')} className="donor-btn">
            ❤️ Donor Login
          </button>
          <button onClick={() => navigate('/login/hospital')} className="hospital-btn">
            🏥 Hospital Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
