const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require('gatsby-paginate');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'MarkdownRemark') {
        const slug = createFilePath({ node, getNode, basePath: 'pages' });
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve) => {
        graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              id
              frontmatter {
                title
                date
                image{
                    childImageSharp{
                        fluid{
                            src
                    }
                    }
                }
                coverText
              }
              fields {
                slug
              }
              excerpt(pruneLength:48)
            }
          }
        }
      }
    `).then((result) => {
            createPaginatedPages({
                edges: result.data.allMarkdownRemark.edges,
                createPage,
                pageTemplate: 'src/templates/posts.js',
                pageLength: 6, // This is optional and defaults to 10 if not used
                pathPrefix: '/', // 必须拥有
                context: {}, // This is optional and defaults to an empty object if not used
            });
            result.data.allMarkdownRemark.edges.map(({ node }) => {
                createPage({
                    path: node.fields.slug,
                    component: path.resolve('./src/templates/BlogPost.js'),
                    context: {
                        slug: node.fields.slug,
                    },
                });
            });
            resolve();
        });
    });
};
