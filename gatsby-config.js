module.exports = {
  siteMetadata: {
    title: `97thjingba‘s blog`,
    description: `lgy's blog`,
    siteUrl: `https://elated-lewin-51cf0d.netlify.com/`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          {
            resolve: `gatsby-remark-images`, //remarkdown里配置maxwidth的大小
            options: {
              maxWidth: 728
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets/`,
        name: `assets`
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
  ]
};
