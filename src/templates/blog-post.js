import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Section,Container} from 'reactbulma'

const textcenter={
  display:'flex',
  alignItems:'center',
  justifyContent: 'center'
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Section>
        <h1 className="title" style={textcenter}>{post.frontmatter.title}</h1>
        <section className="hero is-fullheight " >
          <div className="hero-body">
            <div className="container"> 
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </div>
          </div>
        </section>  
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