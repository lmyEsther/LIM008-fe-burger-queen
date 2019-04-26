import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderCook.module.css';

const OrderCook = ({
  clientName, id, products, changeStatus, date, timeFinished, status,
}) => (
  <>
    <div className={styles.Card} data-testid="order-cook">
      <div className={styles.Container}>
        <h3 data-testid={`${id}-name`}>{clientName !== '' ? clientName : `Orden ${id.substr(-5)}`}</h3>
        {products && products.map(lab => <p>{`(${lab.cant} ud) ${lab.label}`}</p>)}
        {status === 'cook' && 
        (<button
          data-testid={`${id}-cook-button`}
          onClick={() => {
            changeStatus(id, 'serve', date, Date.now());
          }
          }
        >
          {' '}
  Servir
        </button>)}
        
        {status === 'serve' && 
        (<button
          dataid={`${id}-serve-button`}
          onClick={() => {
            changeStatus(id, 'finished', date, Date.now());
          }}
        >
          {' '}
  Completado
        </button>)}
        {timeFinished > 0 && (<h5>{`Se han demorado ${Math.round((timeFinished / 1000) / 60)} min para despechar esta orden`}</h5>)}
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
