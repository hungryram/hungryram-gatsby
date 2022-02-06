module.exports = {
  siteMetadata: {
    title: `hungryramgatsby`,
    siteUrl: `https://www.yourdomain.tld`,
    twitter: `ramdettmer`,
    image: `https://res.cloudinary.com/hungryram19/image/upload/v1631928088/hungryram/2021-hungry-ram-logo-black_hsw94p.png`
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
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": `${__dirname}/content/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": `${__dirname}/data/`
      }
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: `https://hungryram.com`
      }
    }
  ]
};