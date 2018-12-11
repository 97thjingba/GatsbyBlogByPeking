import React from "react"
// import { css } from "react-emotion"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { Container,Section,Title,SubTitle} from 'reactbulma'


export default ({ data }) => {
  return (
    <Layout>
      <body>
          <Section className="hero is-fullheight">
            <Container>
              <Title>李贝贝的小博客</Title>
                <SubTitle>
                Record <strong>every day</strong> of life
                </SubTitle>
                <div>
                  <h4>{data.allMarkdownRemark.totalCount}篇小文章</h4>
                  {data.allMarkdownRemark.edges.map(({ node }) => (
                    <div key={node.id} style={{marginTop:20}}>
                      <Link to={node.fields.slug}>
                      <h3 className="title">
                        {node.frontmatter.title}
                        <span className="">
                          — {node.frontmatter.date}
                        </span>
                      </h3>
                      <p className="subtitle has-text-primary">{node.excerpt}</p>
                      </Link>
                    </div>
                  ))}
                </div>
            </Container>
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
          excerpt(pruneLength: 100 )
        }
      }
    }
  }
`