import React from "react";
import Layout from '../components/layout';
import LoaderContact from '../components/LoaderContact';
import IllustrationContact from '../svg/illustration-contact.svg';

import '../scss/contact.scss';
import '../scss/internal-loader.scss';

import SEO from '../components/SEO';

const ContactPage = () => (
  <Layout>
    <SEO siteTitle="Kontakt" />
      <LoaderContact/>
      <main className="page contact-page">
        <div className="contact-page__wrapper">
          <h1 className="title contact-title">W czym możemy Ci pomóc?</h1>

          <section className="contact">
            <h2 className="contact-subtitle">Netfine <span>Agencja Interaktywna</span></h2>
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
          <img className="illustration illustrationC" src={IllustrationContact} alt="responsywne strony internetowe, dostosowane do różnych rozdzielczości i urządzeń mobilnych"/>
        </div>
      </main>
  </Layout>
  
)

export default ContactPage
