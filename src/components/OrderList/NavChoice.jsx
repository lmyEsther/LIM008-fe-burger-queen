import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavChoice.module.css';

const navChoice = ({ setStatus }) => (
  <div className={styles.NavChoice} data-testid="nav-choice-order">
    <button type="button" onClick={() => setStatus('cook')} data-testid="choice-cook">En Preparación</button>
    <button type="button" onClick={() => setStatus('serve')} data-testid="choice-serve">Listas Para Servir</button>
    <button type="button" onClick={() => setStatus('finished')} data-testid="choice-finished">Finalizadas</button>
  </div>
);

export default navChoice;

navChoice.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
