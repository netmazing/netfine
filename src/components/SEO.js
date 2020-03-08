import React from 'react';
import {Helmet} from 'react-helmet';

const SEO = ({siteTitle, siteDesc, siteLang}) => {
    let title = siteTitle ? `${siteTitle} | ` : ''
    let desc = siteDesc ? `${siteDesc}` : 'Stworzymy dla Ciebie stronę internetową, zaprojektujemy logo, przygotujemy kampanię marketingową. Z przyjemnością zadbamy o Twój wizerunek w sieci.'
    let lang = siteLang ? `${siteLang}` : 'pl'
    return (
        <Helmet htmlAttributes={lang={lang}} title={`${title}Netfine Agencja Interaktywna`}>
            <meta name="description" content={desc}/>
         </Helmet>
    )
}

export default SEO
