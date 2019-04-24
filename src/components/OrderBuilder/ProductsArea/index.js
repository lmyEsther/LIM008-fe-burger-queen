import React from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import PropTypes from 'prop-types';
import Product from './Product';
import NavChoice from './NavChoice';
import db from '../../../lib/firestore';
import styles from './ProductsArea.module.css';
import Spinner from '../../common/Spinner';

const ProductsArea = ({
  removedProduct, addedProduct,
}) => {
  const { error, loading, value } = useCollection(
    db().collection('/dining').orderBy('type', 'asc'),
  );

  const [choice, setChoice] = useState('burger');

  return (
    <>
      <div className={styles.productsArea}>
        <h3>Selecciona el producto de preferencia: </h3>
        <NavChoice setType={(type) => setChoice(type)} />
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
            <Product
              key={doc.id}
              id={doc.id}
              label={doc.data().label}
              price={doc.data().price}
              remove={removedProduct}
              add={addedProduct}
            />
          ))}
        </div>
        )}
      </div>
    </>
  );
};

export default ProductsArea;

ProductsArea.propTypes = {
  removedProduct: PropTypes.func.isRequired,
  addedProduct: PropTypes.func.isRequired,
};
