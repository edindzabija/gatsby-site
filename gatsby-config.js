module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
    description: `Learning Gatsby`,
    author: `Edin Džabija`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    "gatsby-plugin-use-dark-mode",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "src",
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
  ],
}
