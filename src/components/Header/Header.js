import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import { Helmet } from "react-helmet";
import { SectionsContainer, Section } from "react-fullpage-lgy";

let options = {
    sectionClassName: "section",
    anchors: ["one"],
    scrollBar: false,
    arrowNavigation: true,
    navigation: false
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                            query {
                                site {
                                siteMetadata {
                                    title
                                    description
                                }
                                }
                            }
                            `}
                render={data => (
                    <body>
                        <Helmet>
                            <html lang="en" />
                            <title>{data.site.siteMetadata.title}</title>
                            <meta
                                name="description"
                                content={data.site.siteMetadata.description}
                            />
                        </Helmet>
                        <div>
                            <SectionsContainer {...options}>
                                <Section id="slide">
                                    <div className="center">
                                        <h1 className="has-text-white title title_position">
                                            LGY'S blog - by GATSBY
                                        </h1>
                                    </div>
                                </Section>
                            </SectionsContainer>
                        </div>
                    </body>
                )}
            />
        );
    }
}
export default Header;