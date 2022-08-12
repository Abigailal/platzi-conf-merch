/* eslint-disable import/no-named-as-default */
import React, {useContext} from 'react';
import Product from './Product';
import {AppContext} from '../context/AppContext';
import '../styles/css/products.css';

function Products() {
    const { state:{products}, addToCart } = useContext(AppContext);
    const handleAddToCart = product => () => {
        addToCart(product)
    }
    return (
        <div className="Products container-fluid">
            <div className="Products__items row justify-content-center align-items-center">
                {products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))}
            </div>
        </div>
    );
}

export default Products;