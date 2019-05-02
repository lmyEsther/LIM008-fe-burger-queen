import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Order from '../Order';

beforeEach(cleanup);

describe('<Order />', () => {
  it('Pinta bien el label, la cantidad y el sub-total', () => {
    const { getByTestId } = render(<Order id="pro1" label="Cafe" cant={2} subTotal={18} />);
    const label = getByTestId('pro1-label');
    expect(label.textContent).toBe('[2] Cafe Monto: S/ 18');
  });
  it('ejecuta funcion de add', () => {
    const add = jest.fn();
    const { getByTestId } = render(<Order id="pro1" add={add} />);
    const button = getByTestId('pro1-add-button-order');
    expect(add.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(add.mock.calls).toHaveLength(1);
  });
  it('ejecuta funcion de remove', () => {
    const remove = jest.fn();
    const { getByTestId } = render(<Order id="pro1" remove={remove} />);
    const button = getByTestId('pro1-remove-button-order');
    expect(remove.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(remove.mock.calls).toHaveLength(1);
  });
});
