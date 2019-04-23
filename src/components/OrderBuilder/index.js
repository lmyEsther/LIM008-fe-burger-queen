import React, { useState } from 'react';

import ProductsArea from './ProductsArea';
import OrderSummary from './OrderSummary';
import { addProduct, removeProduct, estimateAmount } from '../../lib/product-controller';
import db from '../../lib/firestore';

const OrderBuilder = () => {
  const [products, setProducts] = useState([]);
  const [clientName, setNameClient] = useState('');

  const addProductHandler = (selectedID, selectedPrice, selectedLabel) => {
    setProducts(addProduct(products, selectedID, selectedPrice, selectedLabel));
  };

  const removeProductHandler = (selectedID) => {
    setProducts(removeProduct(products, selectedID));
  };

  const purchaseContinueHandler = () => {
    // if (products !== []) {
      db().collection('/orders').add({
        products,
        clientName,
        date: Date.now(),
        totalAmount: estimateAmount(products),
      });
      setProducts([]);
      setNameClient('');
    // } else {
    //   // eslint-disable-next-line no-alert
    //   alert('Por favor, llena todos los campos para enviar la orden a cocina.');
    // }
  };

  const purchaseCancelHandler = () => {
    setProducts([]);
    setNameClient('');
  };

  return (
    <>
      <ProductsArea
        addedProduct={addProductHandler}
        removedProduct={removeProductHandler}
      />
      <OrderSummary
        products={products}
        totalAmount={estimateAmount(products)}
        clientName={clientName}
        captureNameClient={event => setNameClient(event.target.value)}
        purchaseContinued={purchaseContinueHandler}
        purchaseCancelled={purchaseCancelHandler}
      />
    </>
  );
};

export default OrderBuilder;
