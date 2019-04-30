import React from 'react';

import PropTypes from 'prop-types';
import styles from './Toolbar.module.css';
import NavBar from './NavBar';
import Logo from '../Logo';
import ToggleDrawer from './ToggleDrawer';

const toolbar = ({ toggleDrawerClicked }) => (
  <header className={styles.Toolbar}>
    <div className={styles.Logo}>
      <Logo />
    </div>
    <h1>BURGER QUEEN</h1>
    <ToggleDrawer clicked={toggleDrawerClicked} />
    <nav className={styles.TabletOnlyPlus}>
      <NavBar />
    </nav>
  </header>
);

export default toolbar;

toolbar.propTypes = {
  toggleDrawerClicked: PropTypes.func.isRequired,
};
