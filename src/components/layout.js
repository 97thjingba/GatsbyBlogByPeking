import React from "react"
import { StaticQuery, graphql } from "gatsby"
import './layout.css'
import { Helmet } from 'react-helmet'
import { SectionsContainer, Section } from 'react-fullpage-lgy';
import { FaGithub, FaTencentWeibo } from 'react-icons/fa';

let options = {
    sectionClassName: 'section',
    anchors: ['one'],
    scrollBar: false,
    arrowNavigation: true,
    navigation: false,
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
                    </SectionsContainer>
                    {children}
                    <footer class="footer">
                        <div class="content has-text-centered">
                            <p>
                                <p className="subtitle has-text-black is-7">永远年轻,永远热泪盈眶.   —— Jack Kerouac 《达摩流浪者》</p>
                                <p className="has-text-primary subtitle is-6">Build with gatsby -- by Peking</p>
                                <a href="https://github.com/97thjingba/blog_gatsby"><FaGithub size="1.5rem" /></a>
                            </p>
                        </div>
                    </footer>
                </div>
            </body>
        )}
    />
)