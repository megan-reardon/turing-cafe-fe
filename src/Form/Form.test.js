import React from 'react';
import Form from './Form';
import { render } from '@testing-library/react';
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
      const resButton = getByText("Make Reservation!")
      expect(nameInput).toBeInTheDocument();
      expect(dateInput).toBeInTheDocument();
      expect(timeInput).toBeInTheDocument();
      expect(numberInput).toBeInTheDocument();
      expect(resButton).toBeInTheDocument();
  })
})
