import React from 'react';

function Product({ product }) {
    return (
            <div className="card mx-2 my-2 col-12 col-md-3">
                <img src={product.image} alt={product.title} className="card-img-top" />
                <div className="card-body justify-content-center align-items-center">
                    <h5 className="card-title">{product.title}</h5>
                    <span>${' '}{product.price}</span>
                    <p className="card-text">{product.description}</p>
                    <button type='button' className="btn btn-primary">Comprar</button>
                </div>
            </div>
    );
}

export default Product;

