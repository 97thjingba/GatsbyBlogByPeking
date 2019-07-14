import React, { Component } from "react";
import { graphql, StaticQuery } from "gatsby";
import Footer from "../components/Footer/Footer";
import DrawerLeft from "../components/Drawer/DrawerLeft";
import styled from "styled-components";
import "./blog-post.css";

const HeaderBox = styled.section`
  width: 100%;
  height: 470px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 500px;
`;

const DraweLeftBox = styled.section`
  position: absolute;
  top: 0;
`;

const MarkdodownBackground = styled.section`
  background: rgb(243, 245, 247);
`;

const ContainerBox = styled.section`
  width: 50%;
  position: relative;
  top: -30px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentBox = styled.section`
  background-color: white;
  border: 1px solid;
  border-radius: 15px;
  border-color: white;
  box-shadow: 5px 5px 5px #888888;
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
`;

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <StaticQuery
                query={graphql`
          query {
            markdownRemark {
              html
              frontmatter {
                title
                image {
                  publicURL
                }
              }
            }
          }
        `}
                render={data => (
                    <div>
                        <HeaderBox>
                            <ImageBox src={data.markdownRemark.frontmatter.image.publicURL} />
                            <DraweLeftBox>
                                <DrawerLeft />
                            </DraweLeftBox>
                        </HeaderBox>
                        <MarkdodownBackground>
                            <ContainerBox>
                                <ContentBox>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: data.markdownRemark.html
                                        }}
                                    />
                                </ContentBox>
                            </ContainerBox>
                            <Footer />
                        </MarkdodownBackground>
                    </div>
                )}
            />
        );
    }
}

export default BlogPost;
