import React from 'react';

import PropTypes from 'prop-types';
import Aux from '../../../hoc/Utils/Utils';
import Order from './Order';
import styles from './OrderSumary.module.css';

const orderSumary = ({
  products, totalAmount, purchaseCancelled, purchaseContinued, clientName, captureNameClient,
}) => {
  let dinamicProduct = products
    .map(pro => (
      <Order
        key={pro.id}
        label={pro.label}
        price={pro.price}
        cant={pro.cant}
        subTotal={pro.cant * pro.price}
      />
    ));

  if (dinamicProduct.length === 0) {
    dinamicProduct = <p>Por favor, ingresa un nuevo pedido!</p>;
  }

  return (
    <Aux>
      <div className={styles.OrderSumary}>
        <h3>Resumen de Pedido</h3>
        <div>
          {dinamicProduct}
        </div>
        <div>
          <h5>
Monto Total a Pagar:
            {' '}
            {totalAmount}
          </h5>
          <input
            type="text"
            value={clientName}
            placeholder="Ingresa el nombre del cliente"
            onChange={captureNameClient}
          />
        </div>
        <div>
          <button type="button" onClick={purchaseCancelled}>Cancelar</button>
          <button type="button" onClick={purchaseContinued}>Continuar</button>
        </div>
      </div>
    </Aux>
  );
};

export default orderSumary;

orderSumary.propTypes = {
  products: PropTypes.arrayOf.isRequired,
  totalAmount: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  captureNameClient: PropTypes.func.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
};
