import React from 'react';
import './Hospital.css';  

const bloodQuantities = {
  A_pos: 20,
  A_neg: 5,
  B_pos: 15,
  B_neg: 7,
  AB_pos: 10,
  AB_neg: 3,
  O_pos: 30,
  O_neg: 12,
};

const BloodData = () => {
  return (
    <div className="hospital-page-container">
      <h2>Blood Stock Data</h2>
      <ul>
        {Object.entries(bloodQuantities).map(([type, qty]) => (
          <li key={type}>
            <strong>{type.replace('_pos', '+').replace('_neg', '-')}</strong>: {qty} units
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BloodData;
