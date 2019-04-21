import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import db from '../../lib/firestore';
import Spinner from '../common/Spinner';
import Order from './Order';

const OrderList = () => {
  const { error, loading, value } = useCollection(
    db().collection('/orders').orderBy('date', 'desc'),
  );

  return (
    <>
      <h3>Lista de Ordenes</h3>
      {error && (
      <p data-testid="error">
Error:
        {' '}
        {error}
      </p>
      )}
      {loading && <Spinner dataid="spinner-loading">Valar Morghulis</Spinner>}
      {value && (
      <div>
        {value.docs.map(doc => (
          <Order
            key={doc.id}
            id={doc.id}
            clientName={doc.data().clientName}
            products={doc.data().products}
            date={doc.data().date}
          />
        ))}
      </div>
      )}
    </>
  );
};
export default OrderList;
