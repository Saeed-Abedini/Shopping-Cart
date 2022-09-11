import React, { useEffect } from 'react';

// Components
import Product from './shared/Product';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import fetchProducts from '../redux/products/productsActions';

// Style
import styles from "./Store.module.css";
import Loader from './Loader';
const Store = () => {

    const productsState = useSelector(state => state.productsState);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productsState.products.length)
            dispatch(fetchProducts())
    }, []);
    return (
        <div className={styles.container} >
            {
                productsState.loading ?
                    <Loader /> :
                    productsState.error ?
                        <h2>error</h2> :
                        productsState.products.map(product => <Product
                            key={product.id}
                            productData={product}
                        />)
            }
        </div>
    );
};

export default Store;