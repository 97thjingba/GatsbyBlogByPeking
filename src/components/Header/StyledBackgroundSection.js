import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const Width = styled.section`
  height: 600px;
`;

class StyledBackgroundSection extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <StaticQuery
                query={graphql`
                query {
                    desktop: file(relativePath: { eq: "HomePage.jpg" }) {
                    childImageSharp {
                        fluid(quality: 90, maxWidth: 4160) {
                        ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                    }
                }
                `}
                render={(data) => {
                    const imageData = data.desktop.childImageSharp.fluid;
                    return (
                        <BackgroundImage
                            Tag="section"
                            className=""
                            fluid={imageData}
                            backgroundColor="#040e18"
                        >
                            <Width />
                        </BackgroundImage>
                    );
                }}
            />
        );
    }
}

export default StyledBackgroundSection;
