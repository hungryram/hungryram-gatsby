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
    "gatsby-plugin-mdx", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
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