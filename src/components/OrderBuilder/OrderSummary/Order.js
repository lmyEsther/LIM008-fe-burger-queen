import React from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';

const order = ({
  label, cant, subTotal, id,
}) => (
  <div className={styles.Card} data-testid="order">
    <h5
      data-testid={`${id}-label`}
    >
      {`${label} [${cant}] sub-total: ${subTotal}`}
    </h5>
  </div>
);

export default order;

order.propTypes = {
  label: PropTypes.string.isRequired,
  cant: PropTypes.number.isRequired,
  subTotal: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};
