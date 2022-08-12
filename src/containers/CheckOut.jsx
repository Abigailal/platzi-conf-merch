import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/css/checkout.css';

function CheckOut() {
    const { state, removeFromCart } = useContext(AppContext);
    const { cart } = state;

    const handleRemove = product => () => {
        removeFromCart(product);
    };

    const handleSumTotal = () => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
    }

    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='col'>
                    <hr />
                    <h4 className='my-0 py-0'>SHOPPING BAG</h4>
                    <hr />
                </div>
            </div>
            <div className='row justify-content-center align-items-center'>
                <div className='col-5 col-xl-7'>
                    <button type='button' className='btn'>BACK TO SHOPPING</button>
                </div>
                <div className='col-7 col-xl-5 d-flex justify-content-center align-items-center'>
                    <a type='button' className='btn btn__paypal' href='/checkout/payment'> </a>
                    or
                    <a type='button' className='btn btn-dark ms-2' href='/checkout/information'> PROCEED WITH YOUT ORDER </a>
                </div>
            </div>

            <div className='line--border mx-1 mt-4'> </div>
            <div className='d-flex'>
                <div className='line--div ms-1'>  </div>
                <p className='ms-2 pt-1'> ITEMS ADDED TO YOUR SHOPPING BAG (2)</p>
            </div>

            <div className="row">
                <div className="col">
                    <p>ITEM</p>
                    <hr />
                </div>
                <div className="col">
                    <p>QUANTITY</p>
                    <hr />
                </div>
                <div className="col">
                    <p>PRICE</p>
                    <hr />
                </div>
            </div>

            {cart.length > 0 ? <h3>hola</h3> : <h6>Sin pedidos... Regresa pronto</h6>}
            <div className="Checkout">
                <div className="Checkout-content">
                    {cart.length > 0 ? <h3>Lista de pedidos:</h3> : <h3>Sin pedidos...</h3>}
                    {cart.map((item) => (
                        <div className="Checkout-item">
                            <div className="Checkout-element">
                                <h4>{item.title}</h4>
                                <span>
                                    $
                                    {item.price}
                                </span>
                            </div>
                            <button type="button" onClick={handleRemove(item)}>
                                <i className="fas fa-trash-alt" />
                            </button>
                        </div>
                    ))}
                </div>
                {cart.length > 0 && (
                    <div className="Checkout-sidebar">
                        <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
                        <Link to="/checkout/information">
                            <button type="button">Continuar pedido</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CheckOut;