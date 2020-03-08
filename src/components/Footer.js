import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
    // const url = typeof window !== 'undefined' ? window.location.href : '';
    // console.log(url);
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    let enPath = '';
    if (path === '/') {
        enPath = '/en'
    } else if (path === '/oferta') {
        enPath = '/en/offer'
    } else if (path === '/klienci') {
        enPath = '/en/realizations'
    } else if (path === '/kontakt') {
        enPath = '/en/contact'
    }
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-copyrights">&copy; {new Date().getFullYear()} Netfine</p>
                <AniLink fade to={enPath} className="change-language">English</AniLink>
            </div>
        </footer>
    )
}

export default Footer
