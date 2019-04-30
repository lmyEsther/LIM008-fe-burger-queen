import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Layer.module.css';
import Toolbar from '../Toolbar';
import SideDrawer from '../Toolbar/SideDrawer';

const Layer = ({ children }) => {
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideToggleDrawerHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };


  return (
    <>
      <Toolbar toggleDrawerClicked={sideToggleDrawerHandler} />
      <SideDrawer
        open={showSideDrawer}
        close={sideDrawerClosedHandler}
      />
      <main className={styles.Content}>
        {children}
      </main>
    </>
  );
};

export default Layer;

Layer.propTypes = {
  children: PropTypes.element.isRequired,
};
