import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';
import Spinner from '../common/Spinner';
import OrderCook from './OrderCook';
import NavChoice from './NavChoice';
import styles from './OrderList.module.css';

const OrderList = () => {
  const { error, loading, value } = useCollection(
    db().collection('orders').orderBy('date', 'desc'),
  );

  const [choice, setChoice] = useState('cook');

  const changeStatusHandler = (id, currentStatus, date, currentDate) => {
    if (currentStatus === 'serve') {
      db().collection('orders').doc(id).update({
        status: currentStatus,
      });
    } else {
      db().collection('orders').doc(id).update({
        status: currentStatus,
        timeFinished: Math.round(((currentDate - date) / 1000) / 60),
      });
    }
  };

  return (
    <>
      <section className={styles.OrderList}>
        <NavChoice setStatus={status => setChoice(status)} />
        {error && (
        <p data-testid="error2">
Error:
          {' '}
          {error}
        </p>
        )}
        {loading && <Spinner dataid="spinner-loading2">Valar Morghulis</Spinner>}
        {value && (
          <div>
            {value.docs.filter(doc => doc.data().status === choice)
              .map(doc => (
                <OrderCook
                  key={doc.id}
                  id={doc.id}
                  clientName={doc.data().clientName}
                  products={doc.data().products}
                  timeFinished={doc.data().timeFinished}
                  date={doc.data().date}
                  changeStatus={changeStatusHandler}
                  status={doc.data().status}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
};
export default OrderList;
