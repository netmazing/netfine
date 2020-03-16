import React from "react";
import LayoutEn from '../../components/en/layoutEn';
import Loader from '../../components/Loader';
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import '../../scss/index.scss';
import '../../scss/arrow.scss';

import Img1 from '../../images/bg-images/bg2.jpg';
import Img2 from '../../images/bg-images/hero-bg.jpg';
import Img3 from '../../images/bg-images/bg5.jpg';
import Img4 from '../../images/bg-images/bg4.jpg';

import ArrowDown from '../../svg/arrow-down.svg';
import ArrowRight from '../../svg/arrow-right.svg';

import SEOen from '../../components/en/SEOen';


const IndexPageEn = () => {
  const transtionTime = 1.5;
  return (
    <LayoutEn>
      <SEOen/>

      <Loader/>
      
      <main className="page">
        <h1 className="hidden">Netfine Interactive Agency</h1>
        <Parallax bgImage={Img1} strength={500}>
          <header className="hero">
            <h2 className="title hero__title">Let’s create something incredible</h2>
            <p className="text hero__text">We want to open up new opportunities for you. We will launch your website, design a logo, run an online advertising campaign. We will be happy to take care of your virtual image.</p>
            <img className="arrow-down" src={ArrowDown} alt="czytaj dalej o Agencji Interaktywnej Netfine"/>
          </header>
        </Parallax>

        <Parallax bgImage={Img2} strength={300}>
          <section className="section parallax parallax1">
            <Fade bottom>
              <h2 className="section__title subtitle">Effective online advertising</h2>
            </Fade>
            <Fade bottom>
              <p className="text">We love to create beautiful things. Whether you need - a functional online store, a large portal or a minimalist website - we will do everything to meet your expectations.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/en/offer"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Offer
                  <img className="arrow-right" src={ArrowRight} alt="Read more about our offer. ofertę agencji reklamowej Netfine. Websites, logo, online marketing"/>
                </AniLink>
              </Fade>
          </section>
        </Parallax>

        <Parallax bgImage={Img3} strength={300}>
          <section className="section parallax parallax2">
            <Fade bottom>
              <h2 className="section__title subtitle">Experience</h2>
            </Fade>
            <Fade bottom>
                <p className="text">Your requirements are our challenges. We have an individual approach to the client and we enjoy the fruits of each project.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/en/realizations"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Realizations
                  <img className="arrow-right" src={ArrowRight} alt="See our realizations"/>
                </AniLink>
            </Fade>
          </section>
        </Parallax>

        <Parallax bgImage={Img4} strength={300}>
          <section className="section parallax parallax3">
            <Fade bottom>
              <h2 className="section__title subtitle">Let yourself be seen</h2>
            </Fade>
            <Fade bottom>
                <p className="text">Do you want to express a vision of your business through a website or visual identification? Do you care about effective promotion of your business and acquiring new customers? Leave it to us and don't worry about anything.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/en/contact"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Let's talk
                  <img className="arrow-right" src={ArrowRight} alt="Ask for an cooperation"/>
                </AniLink>
            </Fade>
          </section>
        </Parallax>

       </main>
       
    </LayoutEn>
)}

export default IndexPageEn
