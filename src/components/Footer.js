import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-copyrights">&copy; {new Date().getFullYear()} Netfine</p>
                <AniLink fade to='/en' className="change-language">English</AniLink>
            </div>
            
        </footer>
    )
}

export default Footer
