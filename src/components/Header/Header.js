import React, { Component } from "react";
import { StaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import DrawerLeft from "../Drawer/DrawerLeft";
import StyledBackgroundSection from "./StyledBackgroundSection";
import styled from "styled-components";
import GithubCorner from "react-github-corner";

const DrawerPosition = styled.section`
  width: 100%;
  position: fixed;
  top: 0;
`;

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
                        <StyledBackgroundSection />
                        <DrawerPosition>
                            <GithubCorner
                                bannerColor="#125648"
                                href="https://github.com/97thjingba/blog_gatsby"
                            />
                            <DrawerLeft />
                        </DrawerPosition>
                    </body>
                )}
            />
        );
    }
}
export default Header;
