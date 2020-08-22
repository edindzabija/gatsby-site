module.exports = {
  siteMetadata: {
    title: `Gatsby Demo`,
    description: `Learning Gatsby`,
    author: `Edin Džabija`,
  },
  plugins: [
    "gatsby-plugin-sass",
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
