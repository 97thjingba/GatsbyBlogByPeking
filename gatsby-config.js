module.exports = {
  siteMetadata: {
    title: `beibei-blog`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`, //remarkdown里配置maxwidth的大小
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    }
  ],
}
