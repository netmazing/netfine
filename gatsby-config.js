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
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || "none",
        trackingId: "UA-161911946-1"
      },
    },
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
        name: `Netfine`,
        short_name: `Netfine`,
        start_url: `/`,
        background_color: `#fffff`,
        theme_color: `#ffffff`,
        display: `fullscreen`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
}
