import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: null
    }
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='name'
          value={this.state.name}
          name='name'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='date'
          value={this.state.date}
          name='date'
          onChange={this.handleChange}
        />
        <input
          type='text'
          placeholder='time'
          value={this.state.time}
          name='time'
          onChange={this.handleChange}
        />
        <input
          type='number'
          placeholder='number'
          value={this.state.number}
          name='number'
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default Form
