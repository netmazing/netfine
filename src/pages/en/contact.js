import React from "react";
import LayoutEn from '../../components/en/layoutEn';
import LoaderContact from '../../components/LoaderContact';
import IllustrationContact from '../../svg/illustration-contact.svg';

import '../../scss/contact.scss';
import '../../scss/internal-loader.scss';

import SEOen from '../../components/en/SEOen';

const ContactPageEn = () => (
  <LayoutEn>
    <SEOen siteTitle="Contact" />
      <LoaderContact/>
      <main className="page contact-page">
        <div className="contact-page__wrapper">
          <h1 className="title contact-title">How can we help you?</h1>

          <section className="contact">
            <h2 className="contact-subtitle">Netfine <span>Interactive Agency</span></h2>
            <address className="contact-box">
              <div className="contact-box__wrapper">
                <p className="text">Armii Krajowej 9/4</p>
                <p className="text">72-010 Police</p>
              </div>
              <div className="contact-box__wrapper">
                <a href="tel:+48723168670" className="text contact-link">+48 723 168 670</a>
                <a href="mailto:info@netfine.pl" className="text contact-link">info@netfine.pl</a>
              </div>
            </address>
          </section>
        </div>
        <div className="contact-page__illustration">
          <img className="illustration illustrationC" src={IllustrationContact} alt="Get in touch"/>
        </div>
      </main>
  </LayoutEn>
  
)

export default ContactPageEn
