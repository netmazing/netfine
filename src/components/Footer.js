import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-copyrights">&copy; {new Date().getFullYear()} Netfine</p>
                <AniLink fade to='/en' className="change-language">English</AniLink>
            </div>
            {/* <p className="footer__info">+48 518 297 449</p>
            <p className="footer__info">info@netfine.pl</p> */}
            
        </footer>
    )
}

export default Footer
