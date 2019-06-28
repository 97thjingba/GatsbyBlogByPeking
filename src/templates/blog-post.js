import React from "react"
import { graphql } from "gatsby";
import { Container } from "reactbulma";
import "./blog-post.css";
import Footer from "../components/Footer/footer";
import FullHeader from 'react-full-header';

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            {/* <FullHeader
                title="Peking"
                subtitle="lgy's blog -- by gatsby."
                bgColor="#EBE9EB"
                textColor="#3299BB"
                font="Lobster"
                bgImg={post.frontmatter.image.publicURL}
            /> */}
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