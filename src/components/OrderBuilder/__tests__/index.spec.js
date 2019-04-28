import React from 'react';
import {
  cleanup, render, fireEvent,
} from 'react-testing-library';
import db from '../../../lib/firestore';
import OrderBuilder from '../index';

beforeEach(cleanup);


describe('<OrderBuilder />', () => {
  it('Debería agregar un producto al resumen de pedido', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderBuilder />);

    let order = queryAllByTestId('order');
    expect(order).toHaveLength(0);

    const addOrder = getByTestId('HDobP345-add-button');
    fireEvent.click(addOrder);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(1);
  });

  it('Debería elminar un producto del resumen de pedido', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderBuilder />);

    let order = queryAllByTestId('order');
    expect(order).toHaveLength(0);

    const addOrder = getByTestId('HDobP345-add-button');
    fireEvent.click(addOrder);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(1);

    const removeOrder = getByTestId('HDobP345-remove-button-order');
    fireEvent.click(removeOrder);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(0);
  });

  it('Debería enviar una orden a firestore', (done) => {
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
    const { getByTestId } = render(<OrderBuilder />);
    const addOrderBtn = getByTestId('HDobP345-add-button');
    fireEvent.click(addOrderBtn);

    const sendToKitchenBtn = getByTestId('send-to-kitchen');
    fireEvent.click(sendToKitchenBtn);

    getCollection((data) => {
      expect(data).toHaveLength(4);
      done();
    });
  });

  it('Debería cancelar una orden por completo', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderBuilder />);

    let order = queryAllByTestId('order');
    expect(order).toHaveLength(0);

    const addOrder = getByTestId('HDobP345-add-button');
    fireEvent.click(addOrder); // agrega el producto
    fireEvent.click(addOrder); // suma uno a la cantidad actual: 1

    order = queryAllByTestId('order');
    expect(order).toHaveLength(1);

    const cancel = getByTestId('cancel-order');
    fireEvent.click(cancel);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(0);
  });

  it('Debería capturar el nombre del cliente', () => {
    const { getByTestId } = render(<OrderBuilder />);

    const input = getByTestId('name-client');
    fireEvent.change(input, { target: { value: 'Ruth García' } });
    expect(input.value).toBe('Ruth García');
  });
});
