module.exports = {
  siteMetadata: {
    title: `beibei-blog`,
    description:  `李贝贝的小博客`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
            "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images`, //remarkdown里配置maxwidth的大小
            options: {
              maxWidth: 728,
            },
          },
        ],
      },
    }
  ],
}
