import React from 'react';

import styles from './NavBar.module.css';
import NavItem from '../NavItem';

const navBar = () => (
  <ul className={styles.NavBar}>
    <NavItem link="/" exact>ARMAR ORDEN</NavItem>
    <NavItem link="/orders">VER ORDENES</NavItem>
  </ul>
);

export default navBar;
