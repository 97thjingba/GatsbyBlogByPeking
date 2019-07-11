import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import "./HeaderStyle.css";
import { Helmet } from "react-helmet";
import { SectionsContainer, Section } from "react-fullpage-lgy";
import DrawerLeft from "../Drawer/DrawerLeft";
import styled from "styled-components";

const BoxPosition = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitlePostion = styled.section`
  margin-top: 20%;
`;

const TitleFont = styled.section`
`;

const options = {
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
                        <SectionsContainer {...options}>
                            <Section id="slide">
                                <DrawerLeft />
                                <BoxPosition>
                                    <TitlePostion>
                                        <TitleFont className="has-text-white title">
                                            LGY'S blog - by GATSBY
                                        </TitleFont>
                                    </TitlePostion>
                                </BoxPosition>
                            </Section>
                        </SectionsContainer>
                    </body>
                )}
            />
        );
    }
}
export default Header;
