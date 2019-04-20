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

    const addOrder = getByTestId('Ag500mlSCH-add-button');
    fireEvent.click(addOrder);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(1);
  });

  it('Debería elminar un producto del resumen de pedido', () => {
    const { getByTestId, queryAllByTestId } = render(<OrderBuilder />);

    let order = queryAllByTestId('order');
    expect(order).toHaveLength(0);

    const addOrder = getByTestId('Ag500mlSCH-add-button');
    fireEvent.click(addOrder);

    order = queryAllByTestId('order');
    expect(order).toHaveLength(1);

    const removeOrder = getByTestId('Ag500mlSCH-remove-button');
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
    // getCollection((data) => {
    //   expect(data).toHaveLength(0);
    // });
    // Quiero validar el length de la data antes de que se ejecute el evento click de enviar
    // pero al ser un callback se ejecuta luego de que fireclick se ejecuta,
    // por el ciclo de vida y/o el hoisting.
    // Debe haber alguna manera asincrona de validar esto, seguiré investigando.
    const { getByTestId } = render(<OrderBuilder />);
    const addOrderBtn = getByTestId('Ag500mlSCH-add-button');
    fireEvent.click(addOrderBtn);

    // debo mockear fieldValue.serverTimestamp() o usar otro metodo, sigo investigando.
    const sendToKitchenBtn = getByTestId('send-to-kitchen');
    fireEvent.click(sendToKitchenBtn);

    getCollection((data) => {
      expect(data).toHaveLength(1);
      done();
    });
  });
});
