import React from "react";
import Layout from '../components/layout';
import LoaderCustomers from '../components/LoaderCustomers';
// import AniLink from "gatsby-plugin-transition-link/AniLink";
// import ArrowRight from '../svg/arrow-right.svg';
// import realizations from '../constants/realizations';
import {Parallax} from 'react-parallax';
import Img1 from '../images/bg-images/bg1.jpg'
import ArrowDown from '../svg/arrow-down.svg';

import Fade from 'react-reveal/Fade';

import '../scss/customers.scss'
import '../scss/internal-loader.scss';
import '../scss/arrow.scss';

import OSAPMockup from '../svg/osap-mockup.svg';
import KeepTheBeatMockup from '../svg/keepthebeat-mockup.svg';
import AkcjaSerduchoMockup from '../svg/akcjaserducho-mockup.svg';

import SEO from '../components/SEO';

const CustomersPage = () => {
  // const transtionTime = 1.5;
  // const firstRealization = realizations[0];
  // const {path, bgColor} = firstRealization;
  return (
    <Layout>
      <SEO siteTitle="Klienci" siteDesc="Zależy nam, by nasze realizacje były użyteczne, funkcjonalne i piękne. Klientów i projekty traktujemy indywidualnie."/>
      <LoaderCustomers/>
      <main className="page customers-page">
        <Parallax bgImage={Img1} strength={500}>
          <header className="customers-header">
            <h1 className="title customers-title">Wizja i podejście</h1>
            <p className="text customers-text">Zależy nam, by nasze realizacje były użyteczne, funkcjonalne i piękne. Zadowolenie klienta ze współpracy jest dla nas kluczowe, dlatego z dumą prezentujemy nasze wybrane projekty.</p>
            <img className="arrow-down" src={ArrowDown} alt="Zobacz realizacje Netfine"/>
          </header>
        </Parallax>

        <section className="section realizations-list">
          <Fade bottom>
            <h2 className="subtitle realizations-title">Realizacje</h2>
          </Fade>

          <Fade bottom>
            <div className="realization realization-osap">
              <img className="realization__img" src={OSAPMockup} alt="Organizational Sociology and Psychology"/>
              <a className="realization__link" href="https://osap.usz.edu.pl">Zobacz online</a>
            </div>
          </Fade>
          
          <Fade bottom>
            <div className="realization realization-ktb">
              <img className="realization__img" src={KeepTheBeatMockup} alt="Keep The Beat"/>
              <a className="realization__link" href="http://keepthebeat.pl">Zobacz online</a>
            </div>
          </Fade>

          <Fade bottom>
            <div className="realization realization-as">
              <img className="realization__img" src={AkcjaSerduchoMockup} alt="Fundacja Akcja Serducho"/>
              <a className="realization__link" href="https://akcjaserducho.pl">Zobacz online</a>
            </div>
          </Fade>
          
        </section>
        
      </main>
    </Layout>
  )}

export default CustomersPage
