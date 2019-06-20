import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './layout.css'
import { Helmet } from 'react-helmet'
import { Container } from "reactbulma";
import { SectionsContainer, Section } from 'react-fullpage';

let options = {
    sectionClassName: 'section',
    anchors: ['sectionOne','sectionTwo'],
    scrollBar: false,
    navigation: false,
    verticalAlign: false,
    sectionPaddingTop: '50px',
    sectionPaddingBottom: '50px',
    arrowNavigation: true
};


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
                <div>
                    <SectionsContainer {...options}>
                        <Section id="slide">
                            <div className="center">
                                <h1 className="has-text-white title title_position">LGY'S blog - by GATSBY</h1>
                            </div>
                        </Section>
                        {children}
                    </SectionsContainer>
                </div>
            </body>
        )}
    />
)