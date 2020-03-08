import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './logo.css';
import '../scss/layout.scss';

const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        <Footer />
        </>
    )
}

export default Layout
