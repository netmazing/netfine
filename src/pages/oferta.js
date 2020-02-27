import React from "react";
import Layout from '../components/layout';
import LoaderOffer from '../components/LoaderOffer';
import '../scss/offer.scss';
import '../scss/internal-loader.scss';

import IllustrationWebDevelopment from '../svg/illustration-web-development.svg';
import IllustrationBranding from '../svg/illustration-branding.svg';
import IllustrationMarketing from '../svg/illustration-marketing.svg';

import Fade from 'react-reveal/Fade';

const Offer = () => (
  <Layout>
    <LoaderOffer/>
    <main className="page offer-page">
      <h1 className="hidden">Oferta</h1>
      <section className="section offer">
        <div className="offer__wrapper offerWD">
          <h2 className="subtitle offer-subtitle subtitleWD">Strony internetowe</h2>
          <p className="text textWD">Ładnie wyglądająca i dobrze pozycjonująca się w wyszukiwarkach strona internetowa jest czymś więcej niż wirtualną wizytówką. Pomoże Ci dotrzeć do nowych klientów i zwiększy świadomość Twojej działalności.</p>
        </div>
        <div className="offer__illustration">
          <img className="illustration illustrationWD" src={IllustrationWebDevelopment} alt="responsywne strony internetowe, dostosowane do różnych rozdzielczości i urządzeń mobilnych"/>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <Fade bottom>
            <h2 className="subtitle offer-subtitle">Identyfikacja wizualna</h2>
            <p className="text">Wizerunek to pierwsza rzecz, po której potencjalny klient lub odbiorca ocenia daną markę. Dlatego tak istotne jest, aby logo, materiały promocyjne czy dekoracja były spójne, wywoływały dobre skojarzenia i zapadały w pamięć.</p>
          </Fade>
        </div>
        <div className="offer__illustration">
          <Fade right>
            <img className="illustration illustrationB" src={IllustrationBranding} alt="projekty logo, materiały promocyjne, plakaty, ulotki, wizytówki"/>
          </Fade>
        </div>
      </section>

      <section className="section offer">
        <div className="offer__wrapper">
          <Fade bottom>
            <h2 className="subtitle offer-subtitle">Marketing online</h2>
            <p className="text">Pozycjonowanie polegające na niszczeniu jakiejkolwiek dostępności strony przez chatoyczne wstawianie nagłówków czy reklamy Google z przypadkowo dobranymi słowami kluczowymi mogą dać chwilowe efekty. Skuteczna promocja w sieci opiera się jednak na długotrwałych działaniach, wynikających z przemyślanej strategii kreowania wizerunku i komunikacji z rynkiem.</p>
          </Fade>
        </div>
        <div className="offer__illustration">
          <Fade right>
            <img className="illustration illustrationM" src={IllustrationMarketing} alt="marketing internetowy, google ads, facebook ads, social media, pozycjonowanie stron"/>
          </Fade>
        </div>
      </section>
    </main>
    
  </Layout>
  
)

export default Offer
