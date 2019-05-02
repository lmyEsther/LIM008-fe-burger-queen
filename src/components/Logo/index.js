import React from 'react';

import throneLogo from '../../assets/throne-logo.png';
import styles from './Logo.module.css';

const logo = () => (
  <div className={styles.Logo}>
    <img src={throneLogo} alt="my-throne-burger" />
  </div>
);

export default logo;
