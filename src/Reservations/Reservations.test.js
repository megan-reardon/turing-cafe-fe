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
        time={"7:30 pm"}
        number={3}
      />);

      const nameEl = getByText("Meg");

      expect(nameEl).toBeInTheDocument();
  })
})
