import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Product from '../Product';

beforeEach(cleanup);

describe('<Product />', () => {
  it('pinta bien el label', () => {
    const { getByTestId } = render(<Product id="123" label="producto1" />);
    const label = getByTestId('123-label');
    expect(label.textContent).toBe('producto1');
  });
  it('pinta bien el precio', () => {
    const { getByTestId } = render(<Product id="123" price={6} />);
    const label = getByTestId('123-price');
    expect(label.textContent).toBe('S/ 6');
  });
  it('ejecuta funcion de add', () => {
    const add = jest.fn();
    const { getByTestId } = render(<Product id="123" add={add} />);
    const button = getByTestId('123-add-button');
    expect(add.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(add.mock.calls).toHaveLength(1);
  });
});
