import React from "react";
import LayoutEn from '../../components/en/layoutEn';
import LoaderCustomers from '../../components/LoaderCustomers';
import {Parallax} from 'react-parallax';
import Img1 from '../../images/bg-images/bg1.jpg'
import ArrowDown from '../../svg/arrow-down.svg';

import Fade from 'react-reveal/Fade';

import '../../scss/customers.scss'
import '../../scss/internal-loader.scss';
import '../../scss/arrow.scss';

import OSAPMockup from '../../svg/osap-mockup.svg';
import KeepTheBeatMockup from '../../svg/keepthebeat-mockup.svg';
import AkcjaSerduchoMockup from '../../svg/akcjaserducho-mockup.svg';

import SEOen from '../../components/en/SEOen';

const CustomersPageEn = () => {
  return (
    <LayoutEn>
      <SEOen siteTitle="Realizations" siteDesc="We want our projects to be useful, functional and beautiful. Customer satisfaction with cooperation is most crucial for us."/>
      <LoaderCustomers/>
      <main className="page customers-page">
        <Parallax bgImage={Img1} strength={500}>
          <header className="customers-header">
            <h1 className="title customers-title">Our approach</h1>
            <p className="text customers-text">We want our projects to be useful, functional and beautiful. Customer satisfaction with cooperation is most crucial for us. We proudly present our sample projects.</p>
            <img className="arrow-down" src={ArrowDown} alt="See our projects"/>
          </header>
        </Parallax>

        <section className="section realizations-list">
          <Fade bottom>
            <h2 className="subtitle realizations-title">Realizations</h2>
          </Fade>

          <Fade bottom>
            <div className="realization realization-osap">
              <img className="realization__img" src={OSAPMockup} alt="Organizational Sociology and Psychology"/>
              <a className="realization__link" href="https://osap.usz.edu.pl">See online</a>
            </div>
          </Fade>
          
          <Fade bottom>
            <div className="realization realization-ktb">
              <img className="realization__img" src={KeepTheBeatMockup} alt="Keep The Beat"/>
              <a className="realization__link" href="http://keepthebeat.pl">See online</a>
            </div>
          </Fade>

          <Fade bottom>
            <div className="realization realization-as">
              <img className="realization__img" src={AkcjaSerduchoMockup} alt="Fundacja Akcja Serducho"/>
              <a className="realization__link" href="https://akcjaserducho.pl">See online</a>
            </div>
          </Fade>
          
        </section>
        
      </main>
    </LayoutEn>
  )}

export default CustomersPageEn
