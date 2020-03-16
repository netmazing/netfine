import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
    const path = typeof window !== 'undefined' ? window.location.pathname : '';
    let plPath = '';
    if (path === '/en') {
        plPath = '/'
    } else if (path === '/en/offer') {
        plPath = '/oferta'
    } else if (path === '/en/realizations') {
        plPath = '/klienci'
    } else if (path === '/en/contact') {
        plPath = '/kontakt'
    }
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-copyrights">&copy; {new Date().getFullYear()} Netfine</p>
                <AniLink fade to={plPath} className="change-language">Polish</AniLink>
            </div>
        </footer>
    )
}

export default Footer
