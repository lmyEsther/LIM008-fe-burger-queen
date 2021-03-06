import React, { useState } from 'react';
import { useCollection } from 'react-firebase-hooks/firestore';
import PropTypes from 'prop-types';
import Product from './Product';
import NavChoice from './NavChoice';
import db from '../../../lib/firestore';
import styles from './ProductsArea.module.css';
import Spinner from '../../common/Spinner';

const ProductsArea = ({
  addedProduct,
}) => {
  const { error, loading, value } = useCollection(
    db().collection('/dining'),
  );

  const [choice, setChoice] = useState('burger');

  return (
    <>
      <section className={styles.productsArea}>
        <NavChoice setType={type => setChoice(type)} />
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
            {value.docs.filter(doc => doc.data().type === choice)
              .map(doc => (
                <Product
                  key={doc.id}
                  id={doc.id}
                  label={doc.data().label}
                  price={doc.data().price}
                  add={addedProduct}
                />
              ))}
          </div>
        )}
      </section>
    </>
  );
};

export default ProductsArea;

ProductsArea.propTypes = {
  addedProduct: PropTypes.func.isRequired,
};
