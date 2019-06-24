import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
// import { Section } from 'reactbulma'
import './blog-post.css'


export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <div className="has-background-light">
                <h1 className="title center">{post.frontmatter.title}</h1>
                <div className="container has-background-white border">
                    <div className="hero-body font-size font-weight">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`