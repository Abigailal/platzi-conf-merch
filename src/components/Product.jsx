import React from 'react';

function Product({ product, handleAddToCart }) {
    return (
            <div className="card mx-2 my-2 col-12 col-md-3 col-lg-2">
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body justify-content-center align-items-center">
                    <h5 className="card-title">{product.title} <span>${''}{product.price}</span> </h5>
                    <p className="card-text">{product.description}</p>
                    <button type='button' className="btn btn-primary"
                    onClick={handleAddToCart(product)}>
                    Comprar</button>
                </div>
            </div>
    );
}

export default Product;

