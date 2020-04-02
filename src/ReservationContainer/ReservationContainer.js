import React from 'react';
import './ReservationContainer.css';
import Reservations from '../Reservations/Reservations';

const ReservationContainer = ({ reservations }) => {
  const reservationCards = reservations.map(reservation => {
    return <Reservations
      id={reservation.id}
      key={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
    />
  })

  return (
    <section className='resy-container'>
      { reservationCards }
    </section>
  )
}

export default ReservationContainer;
