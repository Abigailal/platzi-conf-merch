import React from 'react';
import '../styles/css/information.css';

function Information() {
    return (
        <div className="Information">
            <div className="Information--Title">
                <h2>Informacion de contacto:</h2>
            </div>
            <div className='container Information__container py-5 px-5'>
                <div className='row'>
                    <div className='col'>
                        <form action="" className='Information__container--form'>
                            <input type="text" placeholder="Nombre completo" name="name" />
                            <input type="text" placeholder="Correo Electronico" name="email" />
                            <input type="text" placeholder="Direccion" name="address" />
                            <input type="text" placeholder="Apto" name="apto" />
                            <input type="text" placeholder="Ciudad" name="city" />
                            <input type="text" placeholder="Pais" name="country" />
                            <input type="text" placeholder="Estado" name="state" />
                            <input type="text" placeholder="Codigo postal" name="cp" />
                            <input type="text" placeholder="Telefono" name="phone" />
                        </form>
                    </div>
                    <div className='col Information__container--resume'>
                        <h3>Pedido:</h3>
                        <div className="row">
                            <div className="col">
                                <h4>ITEM Name</h4>
                            </div>
                            <div className="col">
                                <span>$10</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 d-flex justify-content-between align-items-center">
                        <a type='button' href='/' className='btn'>Regresar</a>
                        <a type='button' href='/' className='btn'> Pagar</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;