import React from 'react';
import Product from './Product';
import '../styles/css/products.css';

function Products({ products }) {
    return (
        <div className="Products container-fluid">
            <div className="Products__items row justify-content-center align-items-center">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Products;