import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Reservations from '../Reservations/Reservations';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('can add a new reservation', () => {
    const { getByPlaceholderText, getByText } = render(
      <App
      />)

      const nameInput = getByPlaceholderText("Name");
      const dateInput = getByPlaceholderText("Date (mm/dd)");
      const timeInput = getByPlaceholderText("Time");
      const numberInput = getByPlaceholderText("Number of guests");

      fireEvent.change(nameInput, {
        target: {value: "Meg"}
      });
      fireEvent.change(dateInput, {
        target: {value: "07/05"}
      });
      fireEvent.change(timeInput, {
        target: {value: "7:30"}
      });
      fireEvent.change(numberInput, {
        target: {value: 4}
      });
      fireEvent.click(getByText('Make Reservation!'));

      expect(nameInput.value).toEqual('');
      expect(dateInput.value).toEqual('');
      expect(timeInput.value).toEqual('');
      expect(numberInput.value).toEqual('');

      const nameEl = getByText("Meg");
      const dateEl = getByText("07/05");
      const timeEl = getByText("7:30 pm");
      const numberEl = getByText("Number of guests: 4");

      expect(nameEl).toBeInTheDocument();
      expect(dateEl).toBeInTheDocument();
      expect(timeEl).toBeInTheDocument();
      expect(numberEl).toBeInTheDocument();
  })
})
