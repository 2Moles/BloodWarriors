import React from 'react';
import './Profile.css'

const Profile = () => {
  return (
    <div style={{ maxWidth: 400, margin: '0 auto' }}>
      <h2>Your Profile</h2>
      <div style={{ textAlign: 'center', marginBottom: 20 }}>
        {/* Profile Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          fill="#d81b60"
          viewBox="0 0 24 24"
        >
          <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" />
        </svg>
      </div>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> johndoe@example.com</p>
      <p><strong>Address: </strong> <span style={{marginRight: '8px'}}>123 Main St, City</span>
        <span role="img" aria-label="map">🗺️</span>
      </p>
    </div>
  );
};

export default Profile;
