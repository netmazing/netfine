import React from "react";
import LayoutEn from '../../components/en/layoutEn';
import LoaderOffer from '../../components/LoaderOffer';
import '../../scss/offer.scss';
import '../../scss/internal-loader.scss';

import IllustrationWebDevelopment from '../../svg/illustration-web-development.svg';
import IllustrationBranding from '../../svg/illustration-branding.svg';
import IllustrationMarketing from '../../svg/illustration-marketing.svg';

import Fade from 'react-reveal/Fade';

import SEOen from '../../components/en/SEOen';

const OfferEn = () => (
  <LayoutEn>
    <SEOen siteTitle="Offer" siteDesc="We offer websites, online store, logo, graphic design, online marketing."/>
    <LoaderOffer/>
    <main className="page offer-page">
      <h1 className="hidden">Offer</h1>
      <section className="section offer">
        <div className="offer__wrapper offerWD">
          <h2 className="subtitle offer-subtitle subtitleWD">Websites</h2>
          <p className="text textWD">A nice-looking website with optimal SEO is more than a virtual business card. It will help you reach new customers and increase awareness of your brand.</p>
        </div>
        <div className="offer__illustration">
          <img className="illustration illustrationWD" src={IllustrationWebDevelopment} alt="Responsive web design"/>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <Fade bottom>
            <h2 className="subtitle offer-subtitle">Visual identity</h2>
            <p className="text">Image is the first thing through which a potential customer or recipient assesses the brand. That is why it is important that the logo, promotional materials or decoration are consistent, evoke good associations and are remembered.</p>
          </Fade>
        </div>
        <div className="offer__illustration">
          <Fade right>
            <img className="illustration illustrationB" src={IllustrationBranding} alt="Graphic design"/>
          </Fade>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <Fade bottom>
            <h2 className="subtitle offer-subtitle">Online marketing</h2>
            <p className="text">SEO by adding chaotic HTML headlines? Google ads with random keywords? This can only give short-term effects. Effective online promotion is based, however, on long-term activities resulting from a well-thought-out strategy for creating an image and communicating with the market.</p>
          </Fade>
        </div>
        <div className="offer__illustration">
          <Fade right>
            <img className="illustration illustrationM" src={IllustrationMarketing} alt="SEO, Google Ads, Facebook Ads"/>
          </Fade>
        </div>
      </section>
    </main>
    
  </LayoutEn>
  
)

export default OfferEn
