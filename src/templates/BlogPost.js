/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Footer from '../components/Footer/Footer';
import DrawerLeft from '../components/Drawer/DrawerLeft';
import './blog-post.css';
// eslint-disable-next-line import/order
import GithubCorner from 'react-github-corner';

const HeaderBox = styled.section`
  width: 100%;
  height: 470px;
`;

const ImageBox = styled.img`
  width: 100%;
  height: 500px;
`;

const DraweLeftBox = styled.section`
  width: 100%;
  position: fixed;
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

export default ({ data }) => {
    const post = data.markdownRemark;
    return (
        <div>
            <HeaderBox>
                <ImageBox src={post.frontmatter.image.publicURL} />
                <DraweLeftBox>
                    <DrawerLeft />
                    <GithubCorner
                        bannerColor="#125648"
                        href="https://github.com/97thjingba/blog_gatsby"
                    />
                </DraweLeftBox>
            </HeaderBox>
            <MarkdodownBackground>
                <ContainerBox>
                    <ContentBox>
                        <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    </ContentBox>
                </ContainerBox>
                <Footer />
            </MarkdodownBackground>
        </div>
    );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        image {
          publicURL
        }
      }
    }
  }
`;
