import React from "react";
import Layout from '../components/layout';
import '../scss/error-page.scss';
import SEO from '../components/SEO';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import ArrowRight from '../svg/arrow-right.svg';


const NotFoundPage = () => (
  <Layout>
    <SEO siteTitle="404 :("/>
    <main className="page error-page">
        <div className="error-page__wrapper">
          <h1 className="title error-title">Ooops, chyba zabłądziłeś</h1>
          <p className-="text">Nie ma takiej strony</p>
          <AniLink
          cover
          to="/"
          direction="left"
          duration="1.5"
          bg='#000'
          className="btn">
            Strona główna
           <img className="arrow-right" src={ArrowRight} alt="netfine.pl"/>
          </AniLink>
        </div>
      </main>
  </Layout>
  
)

export default NotFoundPage
