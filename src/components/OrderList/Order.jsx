import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Order.module.css';
import Button from '../common/Button';

const Order = ({
  clientName, id, date, products,
}) => {
  const [timeCook, setTimeCook] = useState(null);
  const [timeInitServe, setTimeInitServe] = useState(0);
  const [timeServe, setTimeServe] = useState(null);
  // const [cooked, setCooked] = useState(false);
  // const [served, setServed] = useState(false);

  return (
    <>
      <div className={styles.Card}>
        <div className={styles.Container}>
          <h3 data-testid={`${id}-name`}>{clientName}</h3>
          {products && products.map(lab => <p>{`${lab.label} (${lab.cant} ud)`}</p>)}
          <Button
            dataid={`${id}-cook-button`}
            clicked={() => {
              setTimeCook(Date.now() - date);
              setTimeInitServe(Date.now());
              // setCooked(true);
            }
          }
            btnType="Success"
          >
            {' '}
  Servido
          </Button>
          <Button
            dataid={`${id}-serve-button`}
            clicked={() => {
              setTimeServe(Date.now() - timeInitServe);
              // setServed(true);
            }}
            btnType="Success"
          >
            {' '}
  Despachado
          </Button>
          {timeCook && (<h5>{`Se demoró ${Math.round((timeCook / 1000) / 60)} min para cocinar`}</h5>)}
          {timeServe && (<h5>{`Se demoró ${Math.round((timeServe / 1000) / 60)} min para despechar`}</h5>)}
        </div>

      </div>
    </>
  );
};

export default Order;

Order.propTypes = {
  date: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
};
