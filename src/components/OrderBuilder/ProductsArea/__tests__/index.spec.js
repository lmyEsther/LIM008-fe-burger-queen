import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import ProductsArea from '../index';

beforeEach(cleanup);

describe('<ProductsArea />', () => {
  it('Debería agregar el id correspondiente a la data proporcionada', () => {
    const add = (id, price, label) => {
      expect(id).toBe('Ag500mlSCH');
      expect(price).toBe(7);
      expect(label).toBe('Agua 500ml');
    };

    const { getByTestId } = render(<ProductsArea addedProduct={add} />);
    const button = getByTestId('Ag500mlSCH-add-button');
    fireEvent.click(button);
  });
});
