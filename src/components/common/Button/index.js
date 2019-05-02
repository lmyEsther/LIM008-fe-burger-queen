import React from 'react';

import styles from './Button.module.css';

const button = ({
  clicked, children, btnType, dataid,
}) => (
  <button
    type="button"
    className={[styles.Button, styles[btnType]].join(' ')}
    onClick={clicked}
    data-testid={dataid}
  >
    {children}

  </button>
);

export default button;
