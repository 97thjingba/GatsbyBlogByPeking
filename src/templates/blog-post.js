import React from "react";
import { graphql } from "gatsby";
import { Container } from "reactbulma";
import "./blog-post.css";
import Footer from "../components/Footer/Footer";
import DrawerLeft from "../components/Drawer/DrawerLeft";

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <div>
            <div className="">
            <DrawerLeft/>
                <img
                    src={post.frontmatter.image.publicURL}
                    className="header_room"
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