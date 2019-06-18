import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section } from 'reactbulma'
import './blog-post.css'

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <Layout>
            <Section className="has-background-light">
            <h1 className="title center">{post.frontmatter.title}</h1>
                <div className="container has-background-white">
                    <section className="hero is-fullheight center" >
                        <div className="hero-body">
                            <div className="container">
                                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                            </div>
                    </div>
                    </section>
                </div>
            </Section>
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