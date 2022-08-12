/* eslint-disable import/no-named-as-default */
/* eslint-disable import/order */
/* eslint-disable import/imports-first */

import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import {AppContext} from '../context/AppContext';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import '../styles/css/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    const { state: { cart } } = useContext(AppContext);
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='bar-fondo py-0'>
            <Container fluid className="px-4 py-1">
                <Navbar.Brand href='./'>
                    <Link to="/" type='button' className='Header__Title'>PlatziConf Merch</Link>
                </Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="/checkout" className='navbar-link'>
                    Check Out <RiShoppingBasket2Fill/>
                    </Nav.Link>
                    {cart.length > 0 && <div className="Header-alert d-flex justify-content-center align-items-center">{cart.length}</div>}
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header


/**
 <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-1 btn-toggle' />
                <Navbar.Collapse id="responsive-navbar-nav justify-content-center align-items-center">
                    <Nav className="ms-auto">
                        <Nav.Link href="/checkout" className='navbar-link'>Check Car <RiShoppingBasket2Fill/></Nav.Link>
                        <Nav.Link href="/" className='navbar-link'>Clothes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
 */