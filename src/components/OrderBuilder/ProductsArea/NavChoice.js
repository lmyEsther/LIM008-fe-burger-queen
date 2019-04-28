import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavChoice.module.css';

const navChoice = ({ setType }) => (
  <div className={styles.NavChoice} data-testid="nav-choice">
    <button type="button" onClick={() => setType('burger')} data-testid="choice-burger">Hamburguesas</button>
    <button type="button" onClick={() => setType('bebida')} data-testid="choice-bebida">Bebidas</button>
    <button type="button" onClick={() => setType('adicional')} data-testid="choice-adicional">Extras</button>
  </div>
);

export default navChoice;

navChoice.propTypes = {
  setType: PropTypes.func.isRequired,
};
