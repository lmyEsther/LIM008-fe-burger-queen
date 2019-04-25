import React from 'react';

import PropTypes from 'prop-types';
import Order from './Order';
import styles from './OrderSummary.module.css';
import Button from '../../common/Button';

const orderSummary = ({
  addedProduct, removedProduct, products, totalAmount, purchaseCancelled,
  purchaseContinued, clientName, captureNameClient,
}) => {
  let dinamicProduct = products
    .map(pro => (
      <Order
        id={pro.id}
        key={pro.id}
        label={pro.label}
        cant={pro.cant}
        subTotal={pro.cant * pro.price}
        remove={removedProduct}
        add={addedProduct}
      />
    ));

  if (dinamicProduct.length === 0) {
    dinamicProduct = <p>Por favor, ingresa un nuevo pedido!</p>;
  }

  return (
    <>
      <section className={styles.OrderSummary}>
        <h3>Resumen de Pedido</h3>
        <input
          data-testid="name-client"
          type="text"
          value={clientName}
          placeholder="Ingresa el nombre del cliente"
          onChange={captureNameClient}
        />
        <div>
          {dinamicProduct}
          <h5>
Monto Total a Pagar:
            {' '}
            {totalAmount}
          </h5>
        </div>
        <div>
          <Button clicked={purchaseCancelled} btnType="Danger" dataid="cancel-order">Cancelar</Button>
          <Button clicked={purchaseContinued} btnType="Success" dataid="send-to-kitchen">Continuar</Button>
        </div>
      </section>
    </>
  );
};

export default orderSummary;

orderSummary.propTypes = {
  products: PropTypes.arrayOf.isRequired,
  totalAmount: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  captureNameClient: PropTypes.func.isRequired,
  purchaseCancelled: PropTypes.func.isRequired,
  purchaseContinued: PropTypes.func.isRequired,
  removedProduct: PropTypes.func.isRequired,
  addedProduct: PropTypes.func.isRequired,
};
