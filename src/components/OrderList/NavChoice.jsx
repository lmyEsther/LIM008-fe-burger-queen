import React from 'react';
import PropTypes from 'prop-types';

const navChoice = ({ setStatus }) => (
  <div>
    <button type="button" onClick={() => setStatus('cook')}>En Preparación</button>
    <button type="button" onClick={() => setStatus('serve')}>Listas Para Servir</button>
    <button type="button" onClick={() => setStatus('finished')}>Finalizadas</button>
  </div>
);

export default navChoice;

navChoice.propTypes = {
  setStatus: PropTypes.func.isRequired,
};
