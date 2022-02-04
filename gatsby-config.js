module.exports = {
  siteMetadata: {
    title: `hungryramgatsby`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
      {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        "trackingId": "G-4X5X3V34Y3"
      }
    }, 
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: false,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "blog",
        "path": `${__dirname}/blog/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "portfolio",
        "path": `${__dirname}/portfolio/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "services",
        "path": `${__dirname}/services/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "locations",
        "path": `${__dirname}/locations/`
      }
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Poppins',
            weights: ['300', '400', '500', '600', '700']
          }
        ]
      }
    }
  ]
};