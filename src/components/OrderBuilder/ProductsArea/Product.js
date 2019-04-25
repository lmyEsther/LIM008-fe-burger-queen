import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.css';
import Button from '../../common/Button';

const product = ({
  label, price, add, id,
}) => (
  <div className={styles.Card}>
    <div className={styles.Container}>
      <h5 data-testid={`${id}-label`}>{label}</h5>
      <span>
 S/
        {' '}
        {price}
      </span>
      <div>
        <Button
          dataid={`${id}-add-button`}
          clicked={() => add(id, price, label)}
          btnType="Success"
        >
          {' '}
  +
        </Button>
      </div>
    </div>

  </div>
);

export default product;

product.propTypes = {
  label: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
