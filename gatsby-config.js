module.exports = {
  siteMetadata: {
    title: `beibei-blog`,
    description:  `李贝贝的小博客`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/components/blog`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132772037-1",
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `imgs`,
        path: `${__dirname}/src/imgs`,
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
              linkImagesToOriginal: false, //是否给大图片增加链接
            },
          },
        ],
      },
    }
  ],
}
