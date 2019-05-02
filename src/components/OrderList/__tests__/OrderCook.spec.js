import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import OrderCook from '../OrderCook';

beforeEach(cleanup);

describe('<OrderCook />', () => {
  it('Pinta bien el label y la cantidad', () => {
    const { getByTestId } = render(<OrderCook
      id="pro1"
      products={[{
        label: 'Cafe',
        cant: 2,
      }]}
    />);
    const labelCant = getByTestId('pro1-products');
    expect(labelCant.textContent).toBe('(2 ud) Cafe');
  });

  it('Pinta bien el nombre del cliente cuando está vacío', () => {
    const { getByTestId } = render(<OrderCook
      id="producto1"
      clientName=""
    />);
    const name = getByTestId('producto1-name');
    expect(name.textContent).toBe('Orden ucto1');
  });

  it('Pinta bien el nombre del cliente', () => {
    const { getByTestId } = render(<OrderCook
      id="producto1"
      clientName="María"
    />);
    const name = getByTestId('producto1-name');
    expect(name.textContent).toBe('María');
  });

  it('Ejecuta funcion de changeStatus: serve', () => {
    const changeStatusServe = jest.fn();
    const { getByTestId } = render(<OrderCook id="pro1" status="cook" changeStatus={changeStatusServe} />);
    const button = getByTestId('pro1-cook-button');
    expect(changeStatusServe.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(changeStatusServe.mock.calls).toHaveLength(1);
  });

  it('Ejecuta funcion de changeStatus: finished', () => {
    const changeStatusFinished = jest.fn();
    const { getByTestId } = render(<OrderCook id="pro1" status="serve" changeStatus={changeStatusFinished} />);
    const button = getByTestId('pro1-serve-button');
    expect(changeStatusFinished.mock.calls).toHaveLength(0);
    fireEvent.click(button);
    expect(changeStatusFinished.mock.calls).toHaveLength(1);
  });

  it('Muestra Tiempo finalizado', () => {
    const { getByTestId } = render(<OrderCook
      id="producto1"
      timeFinished={3}
    />);
    const time = getByTestId('producto1-time-finished');
    expect(time.textContent).toBe('Tiempo de demora: 3 min.');
  });
});
