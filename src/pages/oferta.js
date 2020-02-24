import React from "react";
import Layout from '../components/layout';
import LoaderOffer from '../components/LoaderOffer';
import '../scss/offer.scss';
import '../scss/internal-loader.scss';

import IllustrationWebDevelopment from '../svg/illustration-web-development.svg';
import IllustrationBranding from '../svg/illustration-branding.svg';
import IllustrationMarketing from '../svg/illustration-marketing.svg';

const Offer = () => (
  <Layout>
    <LoaderOffer/>
    <main className="page offer-page">
      <h1 className="hidden">Oferta</h1>
      <section className="section offer">
        <div className="offer__wrapper">
          <h2 className="subtitle">Strony internetowe</h2>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur molestiae optio, ratione adipisci rerum nobis earum quam doloribus repellendus?</p>
        </div>
        <div className="offer__illustration">
          <img className="illustration illustrationWD" src={IllustrationWebDevelopment} alt="responsywne strony internetowe, dostosowane do różnych rozdzielczości i urządzeń mobilnych"/>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <h2 className="subtitle">Identyfikacja wizualna</h2>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur molestiae optio, ratione adipisci rerum nobis earum quam doloribus repellendus?</p>
        </div>
        <div className="offer__illustration">
          <img className="illustration illustrationB" src={IllustrationBranding} alt="projekty logo, materiały promocyjne, plakaty, ulotki, wizytówki"/>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <h2 className="subtitle">Markeing w sieci</h2>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia consectetur molestiae optio, ratione adipisci rerum nobis earum quam doloribus repellendus?</p>
        </div>
        <div className="offer__illustration">
          <img className="illustration illustrationM" src={IllustrationMarketing} alt="marketing internetowy, google ads, facebook ads, social media, pozycjonowanie stron"/>
        </div>
      </section>
    </main>
    
  </Layout>
  
)

export default Offer
