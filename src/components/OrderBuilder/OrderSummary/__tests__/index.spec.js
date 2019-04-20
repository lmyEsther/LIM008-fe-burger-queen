import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import OrderSummary from '../index';

beforeEach(cleanup);

describe('OrderSummary', () => {
  it('captureNameClient', (done) => {
    const captureNameClient = (event) => {
      expect(event.target.value).toBe('Pedro Perez');
      done();
    };
    const { getByTestId } = render(
      <OrderSummary captureNameClient={captureNameClient} clientName="" products={[]} />,
    );
    const input = getByTestId('name-client');
    fireEvent.change(input, { target: { value: 'Pedro Perez' } });
  });
});
