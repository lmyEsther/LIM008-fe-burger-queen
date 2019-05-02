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
      <OrderSummary
        captureNameClient={captureNameClient}
        clientName=""
        products={[]}
      />,
    );
    const input = getByTestId('name-client');
    fireEvent.change(input, { target: { value: 'Pedro Perez' } });
  });
  it('Agrega producto y sus propiedades correspondiente al id', () => {
    const add = (id, price, label) => {
      expect(id).toBe('Ag500mlSCH');
      expect(price).toBe(7);
      expect(label).toBe('Agua 500ml');
    };

    const { getByTestId } = render(<OrderSummary
      products={[{
        id: 'Ag500mlSCH',
        price: 7,
        label: 'Agua 500ml',
        cant: 1,
      }]}
      addedProduct={add}
      removedProduct={() => {}}
    />);
    const button = getByTestId('Ag500mlSCH-add-button-order');
    fireEvent.click(button);
  });
  it('Remueve producto y sus propiedades correspondiente al id', () => {
    const remove = (id) => {
      expect(id).toBe('Ag500mlSCH');
    };

    const { getByTestId } = render(<OrderSummary
      products={[{
        id: 'Ag500mlSCH',
      }]}
      removedProduct={remove}
      addedProduct={() => {}}
    />);
    const button = getByTestId('Ag500mlSCH-remove-button-order');
    fireEvent.click(button);
  });
});
