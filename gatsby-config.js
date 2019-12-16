module.exports = {
  siteMetadata: {
    title: 'NS JS Workshop',
    description: 'This is my awesome blog I made at NS JS Workshop!'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`
  ]
};
