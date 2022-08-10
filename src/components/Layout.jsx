import React from 'react';
import Header from './Header';
import Footer from './Footer';


function Layout({ children }) {
    return (
        <div className='Main'>
            <Header />
            <div className='mt-5 pt-3'>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout