import React from 'react';
import NavbarEn from './NavbarEn';
import FooterEn from './FooterEn';
import '../logo.css';
import '../../scss/layout.scss';

const Layout = ({children}) => {
    return (
        <>
        <NavbarEn />
        {children}
        <FooterEn />
        </>
    )
}

export default Layout
