import React from 'react';

import styles from './Toolbar.module.css';
import NavBar from './NavBar';
import Logo from '../Logo/Logo';

const toolbar = () => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <h1>BURGER QUEEN</h1>
    <nav>
      <NavBar />
    </nav>
  </header>
);

export default toolbar;
