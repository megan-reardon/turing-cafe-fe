import React from 'react';
import Reservations from './Reservations';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Reservations', () => {
  it('should render reservation cards', () => {
    const { getByText } = render (
      <Reservations
        id={3}
        name={"Meg"}
        date={"07/05"}
        time={"7:30"}
        number={3}
      />);

      const nameEl = getByText("Meg");
      const dateEl = getByText("07/05");
      const timeEl = getByText("7:30 pm")
      const numberEl = getByText("Number of guests: 3")

      expect(nameEl).toBeInTheDocument();
      expect(dateEl).toBeInTheDocument();
      expect(timeEl).toBeInTheDocument();
      expect(numberEl).toBeInTheDocument();
  })
})
