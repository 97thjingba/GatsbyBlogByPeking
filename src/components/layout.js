import React from "react"
import { css } from "react-emotion"
import { StaticQuery, Link, graphql } from "gatsby"
import { Section,Container,Image} from 'reactbulma'
import { rhythm } from "../utils/typography"

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
}
    
    render={data => (
      <body>
        <Section large clasName="hero is-fullheight" style={{background:`url(${require("../imgs/914910.jpg")}) no-repeat center bottom`}}>
            <div>
              <nav className="navbar is-transparent nav-top" style={{backgroundColor:'transparent',position:"absolute",top:10}}> 
                <div clasName="navbar-brand"><p className="has-text-white title is-4">BeiBei-blog</p></div>
                <div className="navbar-menu"></div>
              </nav>
            </div>
        </Section>
        {children}
      </body>
    )}
  />
)