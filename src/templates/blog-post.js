import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { Container } from "reactbulma";
import "./blog-post.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
            <div className="has-background-black">
                <LazyLoadImage
                    src={post.frontmatter.image.publicURL}
                    effect="blur"
                />
                <h1 className="title center">{post.frontmatter.title}</h1>
                <div className="container has-background-white blog_post_container">
                    <div className="hero-body font-size font-weight">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
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