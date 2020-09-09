/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Mugs selection`,
  },
  pathPrefix: process.env.PATH_PREFIX || "ceramics",
  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Spectral`,
            variants: [`300`, `500`, `700`],
          },
          {
            family: `Candal`,
          },
        ],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
