export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations	')
  .then(response => response.json())
}

export const postReservation = (newReservation) => {
  return fetch('http://localhost:3001/api/v1/reservations	', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      id: Date.now(),
      name: newReservation.name,
      date: newReservation.date,
      time: newReservation.time,
      number: parseInt(newReservation.number)
    })
  })
}
