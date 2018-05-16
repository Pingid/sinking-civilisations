const manifestOptions = {
  name: "Sinking Civilisations - A Documentary Film",
  short_name: "Sinking Civilisations",
  start_url: "/",
  background_color: "#ffffff",
  theme_color: "#ffffff",
  display: "standalone",
  icon: "src/imgs/icon.png"
}

const faviconOptions = {
  logo: "./src/imgs/favicon.png",
  injectHTML: true,
  icons: {
    android: true,
    appleIcon: true,
    appleStartup: true,
    coast: false,
    favicons: false,
    firefox: true,
    twitter: false,
    yandex: false,
    windows: false
  }
}

const analyticsOptions = {
  trackingId: "UA-5576447fsd2-1",
  head: true,
  anonymize: true,
}

const rootDir = './';

const offilineOptions = {
  cacheId: `sinkingcivilisations-cache`,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/backend.sinkingcivilisations\.it\/medium/,
      handler: 'fastest'
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|webp|svg|gif|tiff)$/,
      handler: `fastest`,
    },
  ],
};

module.exports = {
  siteMetadata: {
    title: 'Sinking Civilisations',
  },
  plugins: [{
                resolve: `gatsby-plugin-sass`
              }, 
              {
                resolve: `gatsby-plugin-react-helmet`
              },
              {
                resolve: `gatsby-plugin-manifest`,
                options: manifestOptions,
              },
              {
                resolve: `gatsby-plugin-favicon`,
                options: faviconOptions
              },
              {
                resolve: `gatsby-plugin-google-analytics`,
                options: analyticsOptions
              },
              {
                resolve: `gatsby-plugin-offline`,
                options: offilineOptions
              }
          ]
};