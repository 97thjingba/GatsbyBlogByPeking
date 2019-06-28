import React from "react"
import { graphql } from "gatsby";
import { Container } from "reactbulma";
import "./blog-post.css";
import Footer from "../components/Footer/footer";

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <div className="blog_post_image">
                <img src={post.frontmatter.image.publicURL} className="blog_post_image"></img>
            </div>
            <div className="has-background-black">
                <h1 className="title center">{post.frontmatter.title}</h1>
                <div className="container has-background-white blog_post_container">
                    <div className="hero-body font-size font-weight">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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