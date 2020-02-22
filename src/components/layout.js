import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Cursor from './Cursor';
// import '../css/layout.css';
import './logo.css';
import '../scss/layout.scss';


const Layout = ({children}) => {
    return (
        <>
        <Navbar />
        {children}
        {/* <Cursor/> */}
        <Footer />
        </>
    )
}

export default Layout
