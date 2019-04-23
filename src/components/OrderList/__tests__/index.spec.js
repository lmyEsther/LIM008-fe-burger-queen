import React from 'react';
import {
  render, cleanup,
} from 'react-testing-library';
import OrderList from '../index';

beforeEach(cleanup);

describe('<OrderList />', () => {
  it('Muestra spinner cuando esta cargando la data', () => {
    const { getByTestId } = render(<OrderList />);

    const spinner = getByTestId('spinner-loading2');
    expect(spinner.textContent).toBe('Valar Morghulis');
  });
  it('Muestra error cuando sale algún error', () => {
    const { getByTestId } = render(<OrderList />);

    const errorMessage = getByTestId('error2');
    expect(errorMessage.textContent).toBe('Error: Error505');
  });
  it('Debería estar el nombre correspondiente a la data', () => {
    const { getByTestId } = render(<OrderList />);

    const name = getByTestId('Pe357-name');
    expect(name.textContent).toBe('Pedro Perez');
  });
});
