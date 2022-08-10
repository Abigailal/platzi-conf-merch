/* eslint-disable import/imports-first */

import React from 'react';
import '../styles/css/header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark" className='bar-fondo py-0'>
            <Container fluid className="px-4 py-1">
                <Navbar.Brand href='./'>
                    <h4>PlatziConf Merch</h4>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-1 btn-toggle' />
                <Navbar.Collapse id="responsive-navbar-nav justify-content-center align-items-center">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className='navbar-link'>All</Nav.Link>
                        <Nav.Link href="/" className='navbar-link'>Clothes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header