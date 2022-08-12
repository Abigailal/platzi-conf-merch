import React from 'react';
import { MdDeleteOutline } from 'react-icons/md';

function ShoppingBag() {
    return (
        <>
            <div className="col">
                <span>PIN</span>
                <hr />
            </div>
            <div className="col">
                <span className='me-2'>1</span>
                <MdDeleteOutline className='btn__trash' />
                <hr />
            </div>
            <div className="col">
                <span>$10</span>
                <hr />
            </div>
        </>
    );
}

export default ShoppingBag;