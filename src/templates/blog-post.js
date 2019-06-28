import React from "react"
import { graphql } from "gatsby";
import { Container } from "reactbulma";
import "./blog-post.css";
import Footer from "../components/Footer/footer";

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <div className="body_background">
                <div className="container has-background-white blog_post_container">
                    <div className="hero-body font-size font-weight">
                        <div dangerouslySetInnerHTML={{ __html: post.html }}/>
                    </div> 
                </div>  
            </div>
            <Footer />
        </div>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
            publicURL
          }
      }
    }
  }
`