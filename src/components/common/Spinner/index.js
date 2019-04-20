import React from 'react';
import PropTypes from 'prop-types';
import styles from './Spinner.module.css';

const spinner = ({ dataid, children }) => (
  <div data-testid={dataid}>
    {children}
    <div className={styles.spinner} />
  </div>
);

export default spinner;

spinner.propTypes = {
  dataid: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
