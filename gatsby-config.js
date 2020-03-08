module.exports = {
  siteMetadata: {
    title: `Netfine Agencja Interaktywna`,
    description: `Stworzymy dla Ciebie stronę internetową, zaprojektujemy logo, przygotujemy kampanię marketingową. Z przyjemnością zadbamy o Twoj wizerunek w sieci.`,
    author: `Netfine`,
    siteUrl: 'https://www.netfine.pl/',
    image: '/netfine.jpg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-plugin-page-progress',
      options: {
        includePaths: [],
        // excludePaths: [],
        height: 3,
        prependToBody: false,
        color: `#000000`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`, `latin-ext`],
            variants: [`600`, `800`, `900`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
