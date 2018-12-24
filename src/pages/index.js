import React from "react"
// import { css } from "react-emotion"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { Container,Section,Title,SubTitle} from 'reactbulma'
import './index.css'

export default ({ data }) => {
  return (
    <Layout>
      <body>
          <Section className="hero is-fullheight has-background-light">
            <div className="container">
                <p className="center  index_title_style">李贝贝的小博客</p>
                <SubTitle className="center index_title_style">
                  Record every day of life
                </SubTitle>
                <div>
                  <h4 className="center">{data.allMarkdownRemark.totalCount}篇小文章</h4>
                      {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id} className="blog_style">
                          <Link to={node.fields.slug}>
                            <h3 className="title center">
                              {node.frontmatter.title}
                                <span className="subtitle center">
                                  — {node.frontmatter.date}
                                </span>
                            </h3>
                          <p className="center index_article_style ">{node.excerpt}</p>
                          </Link>
                          <hr className="has-background-grey-lighter"></hr>
                        </div>
                  ))}
                </div>
                </div>
          </Section>
      </body>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200 truncate: true)
        }
      }
    }
  }
`