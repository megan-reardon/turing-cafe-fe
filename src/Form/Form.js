import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitReservation = (e) => {
    e.preventDefault();
    const { addReservation } = this.props;
    const newReservation = {...this.state, id: Date.now()};
    addReservation(newReservation);
    this.resetReservationInputs();
  }

  resetReservationInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Date (mm/dd)'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='Time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='Number of guests'
          value={this.state.number}
          name='number'
          onChange={this.handleChange}
        />
        <button className="reservation-btn" onClick={this.submitReservation}
        >Make Reservation!
        </button>
      </form>
    )
  }
}

export default Form
