import React from 'react';
import Form from './Form';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  it('should render the correct form inputs', () => {
    const { getByPlaceholderText, getByText } = render(
      <Form
      />);

      const nameInput = getByPlaceholderText("Name");
      const dateInput = getByPlaceholderText("Date (mm/dd)");
      const timeInput = getByPlaceholderText("Time");
      const numberInput = getByPlaceholderText("Number of guests");
      const resButton = getByText("Make Reservation!");
      expect(nameInput).toBeInTheDocument();
      expect(dateInput).toBeInTheDocument();
      expect(timeInput).toBeInTheDocument();
      expect(numberInput).toBeInTheDocument();
      expect(resButton).toBeInTheDocument();
  });

  it('should capture the form input value', () => {
    const submitReservation = jest.fn()
    const { getByText, getByPlaceholderText, debug } = render(
      <Form
      />);
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
      expect(nameInput.value).toBe("Meg");
      expect(dateInput.value).toBe("07/05");
      expect(timeInput.value).toBe("7:30");
      expect(numberInput.value).toBe("4")
  })
})
