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
  it('ejecuta funcion de add', () => {
    const funcioncita = jest.fn();
    const { getByTestId } = render(<Product id="123" add={funcioncita} />);
    const button = getByTestId('123-add-button');
    expect(funcioncita.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(add.mock.calls).toHaveLength(1);
  });
  it('ejecuta función de remove', () => {
    const remove = jest.fn();
    const { getByTestId } = render(<Product id="123" remove={remove} />);
    const button = getByTestId('123-remove-button');
    expect(remove.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(remove.mock.calls).toHaveLength(1);
  });
});
