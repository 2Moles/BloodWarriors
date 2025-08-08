import React from 'react';
import './Hospital.css';

const bloodbanks = [
  { id: 1, name: 'Central Blood Bank', location: 'Downtown' },
  { id: 2, name: 'Eastside Blood Bank', location: 'East District' },
  { id: 3, name: 'Westside Blood Bank', location: 'West District' },
];

const BloodbanksList = () => {
  const handleClick = (id) => {
    alert(`Open blood bank details for ID: ${id}`); // Placeholder for detailed page navigation
  };

  return (
    <div className="hospital-page-container">
      <h2>Blood Banks</h2>
      <div className="interactive-list">
        {bloodbanks.map(bank => (
          <div
            key={bank.id}
            className="interactive-block"
            onClick={() => handleClick(bank.id)}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === 'Enter' && handleClick(bank.id)}
          >
            <h3>{bank.name}</h3>
            <p>Location: {bank.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BloodbanksList;
