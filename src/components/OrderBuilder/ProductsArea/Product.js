import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';

const product = ({
  label, price, add, id,
}) => (
  <button
    type="button"
    className={styles.Card}
    data-testid={`${id}-add-button`}
    onClick={() => add(id, price, label)}
  >
    <p data-testid={`${id}-label`}>{label}</p>
    <p>
 S/
      {' '}
      {price}
    </p>

  </button>
);

export default product;

product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
