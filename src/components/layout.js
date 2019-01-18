import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section } from 'reactbulma'
import './layout.css';


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
        <Section large clasName="hero is-fullheight" id="bg">
            <div>
              <nav className="navbar is-transparent nav-top nav_bg"> 
                  <div clasName="navbar-brand"><p className="has-text-white title is-4">BeiBei-blog</p></div>
              </nav>
              <div className="center">
                  <div className="title has-text-white center">
                    <p className="layout_title_style center">沉舟侧畔千帆过，病树前头万木春</p>
                  </div>
              </div>
            </div>
        </Section>  
        {children}
      </body>
    )}
  />
)