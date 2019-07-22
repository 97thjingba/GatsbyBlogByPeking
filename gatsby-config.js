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
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-132772037-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                respectDNT: true,
                // Avoids sending pageview hits from custom paths
                exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                optimizeId: "GTM-TM9N86Z",
                // Enables Google Optimize Experiment ID
                experimentId: "34k_dTOQT-6crrPo-knWIQ",
                // Set Variation ID. 0 for original 1,2,3....
                variationId: "",
                // Any additional create only fields (optional)
                sampleRate: 5,
                siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
  ]
};
