import React, {useState} from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import links from '../constants/links';
import Logo from './Logo';
import ArrowRight from '../svg/arrow-right.svg';

const Navbar = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav(isOpen => !isOpen);
  }
    return (
        <nav className="navbar">
          <div className="menu">
            <div className="menu-header">
              <AniLink fade to='/' className="menu-logo">
                <Logo></Logo>
              </AniLink>
              <button type="button" aria-label="menu" title="menu" className={isOpen ? "hamburger hamburger--open" : "hamburger"} onClick={toggleNav}>
                <span className="hamburger__box">
                  <span className="hamburger__inner"></span>
                </span>
              </button>
            </div>

            <ul className={isOpen ? "menu-list menu-list--open" : "menu-list"}>
              {links.map((link, index) => {
                return(
                  <li className="menu-list__item" key={index}>
                    <AniLink
                      className="menu-link"
                      cover
                      to={link.path}
                      direction="left"
                      duration={2}
                      bg='#000'
                      >
                      <img className="arrow-right" src={ArrowRight} alt="Przejdź do podstrony"/>{link.name}

                    </AniLink>
                  </li>
                )
              })}
            </ul>

          </div> 
        </nav>
    )
}

export default Navbar
