import React from 'react';
import {
  render, cleanup, fireEvent,
} from 'react-testing-library';
import db from '../../../lib/firestore';
import OrderList from '../index';


beforeEach(cleanup);

describe('<OrderList />', () => {
  it('Muestra spinner cuando esta cargando la data', () => {
    const { getByTestId } = render(<OrderList />);

    const spinner = getByTestId('spinner-loading2');
    expect(spinner.textContent).toBe('Valar Morghulis');
  });
  it('Muestra el error cuando hay algún error', () => {
    const { getByTestId } = render(<OrderList />);

    const errorMessage = getByTestId('error2');
    expect(errorMessage.textContent).toBe('Error: Error505');
  });
  it('Muestra el nombre correspondiente a la data', () => {
    const { getByTestId } = render(<OrderList />);

    const name = getByTestId('Pe357-name');
    expect(name.textContent).toBe('Pedro Perez');
  });
  it('Muestra navegación de elección de comidas', () => {
    const { getByTestId } = render(<OrderList />);
    const navChoice = getByTestId('nav-choice-order');
    expect(navChoice.firstElementChild.textContent).toBe('En Preparación');
  });

  it('Filtra la data segun elección del usuario, en este caso: Listas para servir', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderList />);
    let orderCook = queryAllByTestId('order-cook');
    expect(orderCook).toHaveLength(1);

    const choice = getByTestId('choice-serve');
    fireEvent.click(choice);

    orderCook = queryAllByTestId('order-cook');
    expect(orderCook).toHaveLength(1);
  });

  it('Filtra la data por la sección por defecto: En Preparación', () => {
    const { queryAllByTestId } = render(<OrderList />);
    const orderCook = queryAllByTestId('order-cook');
    expect(orderCook).toHaveLength(1);
  });

  it('Filtra la data segun elección del usuario, en este caso: Finalizadas', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderList />);
    let orderCook = queryAllByTestId('order-cook');
    expect(orderCook).toHaveLength(1);

    const choice = getByTestId('choice-finished');
    fireEvent.click(choice);

    orderCook = queryAllByTestId('order-cook');
    expect(orderCook).toHaveLength(1);
  });

  it('Debería actualizar el status de la orden a Listo para servir', (done) => {
    const getCollection = (callback) => {
      db().collection('/orders').onSnapshot((querySnapshot) => {
        const orderData = [];
        querySnapshot.forEach((doc) => {
          orderData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(orderData);
      });
    };

    const { getByTestId } = render(<OrderList />);

    const changeStatus = getByTestId('Pe357-cook-button');
    fireEvent.click(changeStatus);

    getCollection((data) => {
      const result = data.find(ele => ele.id === 'Pe357');
      expect(result.status).toBe('serve');
      done();
    });
  });

  it('Debería actualizar el status de la orden a Finalizada y el tiempo de realización', (done) => {
    // mock de Date.now()
    Date.now = jest.fn(() => 1556417237279);
    // console.log(Date.now());

    const getCollection = (callback) => {
      db().collection('/orders').onSnapshot((querySnapshot) => {
        const orderData = [];
        querySnapshot.forEach((doc) => {
          orderData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        callback(orderData);
      });
    };
    const { getByTestId } = render(<OrderList />);
    const choice = getByTestId('choice-serve');
    fireEvent.click(choice);
    const changeStatus = getByTestId('CaRtoD34-serve-button');
    fireEvent.click(changeStatus);

    getCollection((data) => {
      const result = data.find(ele => ele.id === 'CaRtoD34');
      expect(result.status).toBe('finished');
      expect(result.timeFinished).toBe(14);
      done();
    });
  });
});
