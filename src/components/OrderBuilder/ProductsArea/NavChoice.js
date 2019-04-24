import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavChoice.module.css';

const navChoice = ({ setType }) => (
  <div className={styles.NavChoice}>
    <button type="button" onClick={() => setType('burger')}>Hamburguesas</button>
    <button type="button" onClick={() => setType('bebida')}>Bebidas</button>
    <button type="button" onClick={() => setType('adicional')}>Extras</button>
  </div>
);

export default navChoice;

navChoice.propTypes = {
  setType: PropTypes.func.isRequired,
};
