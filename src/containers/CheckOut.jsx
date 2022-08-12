import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import '../styles/css/checkout.css';

function CheckOut() {
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
                    <hr/>
                </div>
                <div className="col">
                    <p>QUANTITY</p>
                    <hr/>
                </div>
                <div className="col">
                    <p>PRICE</p>
                    <hr/>
                </div>
            </div>

            <div className="row text-center">
                <div className="col">
                    <span>PIN</span>
                    <hr/>
                </div>
                <div className="col">
                    <span className='me-2'>1</span>
                    <MdDeleteOutline className='btn__trash'/>
                    <hr/>
                </div>
                <div className="col">
                    <span>$10</span>
                    <hr/>
                </div>
            </div>


            <div className='row justify-content-end align-items-center'>
                <div className='col-4 mb-5'>
                    <h4>Total: $10</h4>
                </div>
            </div>
        </div >
    );
}

export default CheckOut;