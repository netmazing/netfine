import React from "react";
import Layout from '../components/layout';
import Loader from '../components/Loader';
import {Parallax} from 'react-parallax';
import Fade from 'react-reveal/Fade';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import '../scss/index.scss';
import '../scss/arrow.scss';

import Img1 from '../images/bg-images/bg2.jpg';
import Img2 from '../images/bg-images/hero-bg.jpg';
import Img3 from '../images/bg-images/bg5.jpg';
import Img4 from '../images/bg-images/bg4.jpg';

import ArrowDown from '../svg/arrow-down.svg';
import ArrowRight from '../svg/arrow-right.svg';


const IndexPage = () => {
  const transtionTime = 1.5;
  return (
    <Layout>

      <Loader/>
      
      <main className="page">
        <h1 className="hidden">Netfine Agencja Interaktywna</h1>
        <Parallax bgImage={Img1} strength={500}>
          <header className="hero">
            <h2 className="title hero__title">Stwórzmy coś fascynującego</h2>
            <p className="text hero__text">Pragniemy otworzyć przed Tobą nowe możliwości w osiąganiu celów. Uruchomimy dla Ciebie stronę internetową, zaprojektujemy logo, przeprowadzimy kampanię reklamową w internecie. Z przyjemnością zadbamy o Twój wirtualny wizerunek.</p>
            <img className="arrow-down" src={ArrowDown} alt="czytaj dalej o Agencji Interaktywnej Netfine"/>
          </header>
        </Parallax>

        <Parallax bgImage={Img2} strength={300}>
          <section className="section parallax parallax1">
            <Fade bottom>
              <h2 className="section__title subtitle">Skuteczna reklama w sieci</h2>
            </Fade>
            <Fade bottom>
              <p className="text">Uwielbiamy tworzyć piękne rzeczy. Niezależnie od tego, czy potrzebujesz funkcjonalnego sklepu internetowego, rozbudowanej platformy czy minimalistycznej wizytówki, poruszymy niebo i piekło, żeby spełnić Twoje oczekiwania.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/oferta"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Oferta
                  <img className="arrow-right" src={ArrowRight} alt="Poznaj ofertę agencji reklamowej Netfine. Strony internetowe, logo, grafika, marketing internetowy"/>
                </AniLink>
              </Fade>
          </section>
        </Parallax>

        <Parallax bgImage={Img3} strength={300}>
          <section className="section parallax parallax2">
            <Fade bottom>
              <h2 className="section__title subtitle">Doświadczenie</h2>
            </Fade>
            <Fade bottom>
                <p className="text">Twoje wymagania są naszymi wyzwaniami. Do klienta pochodzimy indywidualnie, zapewniając pełne zaangażowanie i czerpiąc satysfakcję z każdego projektu.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/klienci"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Klienci
                  <img className="arrow-right" src={ArrowRight} alt="Przejdź do podstrony z realizacjami Agencji Interaktywnej Netfine"/>
                </AniLink>
            </Fade>
          </section>
        </Parallax>

        <Parallax bgImage={Img4} strength={300}>
          <section className="section parallax parallax3">
            <Fade bottom>
              <h2 className="section__title subtitle">Daj się zauważyć</h2>
            </Fade>
            <Fade bottom>
                <p className="text">Chcesz wyrazić wizję swojej działalności poprzez stronę internetową czy identyfikację wizualną, która odda jej charakter? Zależy Ci na skutecznej promocji i dotarciu do nowych klientów? Zostaw to nam i niczym się nie martw.</p>
            </Fade>
            <Fade bottom>
                <AniLink
                  className="btn"
                  cover
                  to="/kontakt"
                  direction="left"
                  duration={transtionTime}
                  bg='#000'
                >
                  Współpraca
                  <img className="arrow-right" src={ArrowRight} alt="Zapytaj o współpracę. Strony www, materiały promocyjne, reklama online."/>
                </AniLink>
            </Fade>
          </section>
        </Parallax>

       </main>
       
    </Layout>
)}

export default IndexPage
