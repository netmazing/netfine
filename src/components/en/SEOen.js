import React from 'react';
import {Helmet} from 'react-helmet';

const SEO = ({siteTitle, siteDesc, siteLang}) => {
    let title = siteTitle ? `${siteTitle} | ` : ''
    let desc = siteDesc ? `${siteDesc}` : 'We will launch your website, design a logo, run an online advertising campaign. We will be happy to take care of your virtual image.'
    let lang = siteLang ? `${siteLang}` : 'en'
    return (
        <Helmet htmlAttributes={lang={lang}} title={`${title}Netfine Interactive Agency`}>
            <meta name="description" content={desc}/>
         </Helmet>
    )
}

export default SEO