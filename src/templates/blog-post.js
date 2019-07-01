import React from "react";
import { graphql } from "gatsby";
import { Container } from "reactbulma";
import "./blog-post.css";
import Footer from "../components/Footer/Footer";
import Img from "react-lazy-img";

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <div>
                <Img
                    src={post.frontmatter.image.publicURL}
                    width={2000}
                    height={400}
                    offset={1}
                    transition="opacity 1s ease-in"
                />
            </div>
            <div className="has-background-black">
                <div className="container has-background-white blog_post_container blog_post_box">
                    <div className="hero-body font-size font-weight">
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </div>
                </div>
                <Footer />
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
        image{
            publicURL
        }
      }
    }
  }
`