import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
export default ({ data }) => (
  <Layout>
    <p>
      We're the only site running on your computer dedicated to showing the best
      photos and videos of pandas eating lots of food.
    </p>
    <Img fixed={data.file.childImageSharp.fixed} />
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "imgs/914910.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 1200, 
              height: 1000,
              duotone: { highlight: "#ffffff", shadow: "#663399" }) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`