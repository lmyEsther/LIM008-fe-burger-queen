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
    db().collection('/orders').add({
      products,
      clientName,
      date: Date.now(),
      totalAmount: estimateAmount(products),
      status: 'cook',
      timeFinished: 0,
    });
    setProducts([]);
    setNameClient('');
  };

  const purchaseCancelHandler = () => {
    setProducts([]);
    setNameClient('');
  };

  return (
    <>
      <ProductsArea
        addedProduct={addProductHandler}

      />
      <OrderSummary
        products={products}
        totalAmount={estimateAmount(products)}
        clientName={clientName}
        captureNameClient={event => setNameClient(event.target.value)} // pendiente por test unit
        removedProduct={removeProductHandler}
        addedProduct={addProductHandler}
        purchaseContinued={purchaseContinueHandler}
        purchaseCancelled={purchaseCancelHandler}
      />
    </>
  );
};

export default OrderBuilder;
