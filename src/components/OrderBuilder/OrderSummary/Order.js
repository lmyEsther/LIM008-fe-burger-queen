import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';
import Button from '../../common/Button';

const order = ({
  label, cant, subTotal, id, remove, add, price,
}) => (
  <div className={styles.Card} data-testid="order">
    <h5
      data-testid={`${id}-label`}
    >
      {`[${cant}] ${label} Monto: S/ ${subTotal}`}
    </h5>
    <Button
      dataid={`${id}-remove-button-order`}
      clicked={() => remove(id)}
      btnType="Danger"
    >
      {' '}
-
    </Button>
    <Button
      dataid={`${id}-add-button-order`}
      clicked={() => add(id, price, label)}
      btnType="Success"
    >
      {' '}
+
    </Button>
  </div>
);

export default order;

order.propTypes = {
  label: PropTypes.string.isRequired,
  cant: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired,
};
