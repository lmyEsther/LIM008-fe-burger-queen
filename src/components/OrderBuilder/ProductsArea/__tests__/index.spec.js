import React from 'react';
import {
  render, fireEvent, cleanup,
} from 'react-testing-library';
import ProductsArea from '../index';

beforeEach(cleanup);

describe('<ProductsArea />', () => {
  it('Agrega producto y sus propiedades correspondiente al id', () => {
    const add = (id, price, label) => {
      expect(id).toBe('Ag500mlSCH');
      expect(price).toBe(7);
      expect(label).toBe('Agua 500ml');
    };

    const { getByTestId } = render(<ProductsArea
      addedProduct={add}
      removedProduct={() => {}}
    />);
    const button = getByTestId('Ag500mlSCH-add-button');
    fireEvent.click(button);
  });
  it('Remueve producto y sus propiedades correspondiente al id', () => {
    const remove = (id) => {
      expect(id).toBe('Ag500mlSCH');
    };

    const { getByTestId } = render(<ProductsArea
      removedProduct={remove}
      addedProduct={() => {}}
    />);
    const button = getByTestId('Ag500mlSCH-remove-button');
    fireEvent.click(button);
  });
  it('Muestra spinner cuando esta cargando la data', () => {
    const { getByTestId } = render(<ProductsArea
      addedProduct={() => {}}
      removedProduct={() => {}}
    />);

    const spinner = getByTestId('spinner-loading');
    expect(spinner.textContent).toBe('Valar Morghulis');
  });
  it('Muestra error cuando sale algún error', () => {
    const { getByTestId } = render(<ProductsArea
      addedProduct={() => {}}
      removedProduct={() => {}}
    />);

    const errorMessage = getByTestId('error');
    expect(errorMessage.textContent).toBe('Error: Error505');
  });
});
