import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Section } from 'reactbulma'
import './layout.css';
import { Helmet } from 'react-helmet'

export default ({ children }) => (
    <StaticQuery
        query={graphql`
            query {
                site {
                siteMetadata {
                    title,
                    description,
                }
                }
            }
            `
        }

        render={data => (
            <body>
                <Helmet>
                    <html lang="en" />
                    <title>{data.site.siteMetadata.title}</title>
                    <meta name="description" content={data.site.siteMetadata.description} />
                </Helmet>
                <Section large clasName="hero is-fullheight" id="bg">
                    <div>
                        <nav className="navbar is-transparent nav-top nav_bg">
                            <div clasName="navbar-brand"><p className="has-text-white title is-4">BeiBei-blog</p></div>
                        </nav>
                        <div className="center">
                            <div className="title has-text-white center">
                                <p className="layout_title_style center">李贝贝</p>
                            </div>
                        </div>
                    </div>
                </Section>
                {children}
            </body>
        )}
    />
)