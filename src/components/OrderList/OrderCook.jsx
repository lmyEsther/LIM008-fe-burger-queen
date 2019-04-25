import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderCook.module.css';
import Button from '../common/Button';

const OrderCook = ({
  clientName, id, products, changeStatus, date, timeFinished,
}) => (
  <>
    <div className={styles.Card} data-testid="order-cook">
      <div className={styles.Container}>
        <h3 data-testid={`${id}-name`}>{clientName !== '' ? clientName : `Orden ${id.substr(-5)}`}</h3>
        {products && products.map(lab => <p>{`(${lab.cant} ud) ${lab.label}`}</p>)}
        <Button
          dataid={`${id}-cook-button`}
          clicked={() => {
            changeStatus(id, 'serve', date, Date.now());
          }
          }
          btnType="Success"
        >
          {' '}
  Servir
        </Button>
        <Button
          dataid={`${id}-serve-button`}
          clicked={() => {
            changeStatus(id, 'finished', date, Date.now());
          }}
          btnType="Success"
        >
          {' '}
  Completado
        </Button>
        {timeFinished > 0 && (<h5>{`Se han demorado ${Math.round((timeFinished / 1000) / 60)} min para despechar`}</h5>)}
      </div>

    </div>
  </>
);
export default OrderCook;

OrderCook.propTypes = {
  timeFinished: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
  clientName: PropTypes.string.isRequired,
  products: PropTypes.arrayOf.isRequired,
  id: PropTypes.string.isRequired,
  changeStatus: PropTypes.func.isRequired,
};
