import React from 'react';
import './Reservations.css';

const Reservations = ({ id, name, date, time, number }) => {
  return (
    <div className="reservation-card">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of guests: {number}</p>
      <button className="cancel-btn">Cancel
      </button>
    </div>
  )
}

export default Reservations;
