import React from 'react';
import {
  render, fireEvent, cleanup,
} from 'react-testing-library';
import ProductsArea from '../index';

beforeEach(cleanup);

describe('<ProductsArea />', () => {
  it('Agrega producto y sus propiedades correspondiente al id', () => {
    const add = (id, price, label) => {
      expect(id).toBe('HDobP345');
      expect(price).toBe(7);
      expect(label).toBe('Hamburguesa Doble de Pollo');
    };

    const { getByTestId } = render(<ProductsArea
      addedProduct={add}
    />);
    const button = getByTestId('HDobP345-add-button');
    fireEvent.click(button);
  });

  it('Muestra spinner cuando esta cargando la data', () => {
    const { getByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);

    const spinner = getByTestId('spinner-loading');
    expect(spinner.textContent).toBe('Valar Morghulis');
  });

  it('Muestra error cuando sale algún error', () => {
    const { getByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);

    const errorMessage = getByTestId('error');
    expect(errorMessage.textContent).toBe('Error: Error505');
  });

  it('Muestra navegación de elección de comidas', () => {
    const { getByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);
    const navChoice = getByTestId('nav-choice');
    expect(navChoice.firstElementChild.textContent).toBe('Hamburguesas');
  });

  it('Filtra la data segun elección del usuario, en este caso: Bebidas', () => {
    const { getByTestId, queryAllByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);
    let product = queryAllByTestId('product');
    expect(product).toHaveLength(1);

    const choice = getByTestId('choice-bebida');
    fireEvent.click(choice);

    product = queryAllByTestId('product');
    expect(product).toHaveLength(2);
  });

  it('Filtra la data por la sección por defecto: Hamburguesas', () => {
    const { queryAllByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);
    const product = queryAllByTestId('product');
    expect(product).toHaveLength(1);
  });

  it('Filtra la data segun elección del usuario, en este caso: Extras', () => {
    const { getByTestId, queryAllByTestId } = render(<ProductsArea
      addedProduct={() => {}}
    />);
    let product = queryAllByTestId('product');
    expect(product).toHaveLength(1);

    const choice = getByTestId('choice-adicional');
    fireEvent.click(choice);

    product = queryAllByTestId('product');
    expect(product).toHaveLength(3);
  });
});
