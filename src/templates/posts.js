import React from "react"
import Layout from "../components/layout"
import { Link, graphql, Img } from "gatsby"
import { Card, Section, Title, SubTitle, Media, Content, Image } from 'reactbulma'
import './posts.css'

const NavLink = props => {
    if (!props.test) {
        return <Link to={props.url} id="navlink" className="has-text-primary">{props.text}</Link>;
    } else {
        return <span>{props.text}</span>;
    }
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount  
        edges {
          node {
            id
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
            excerpt(pruneLength:150)
          }
        }
      }
  }
`

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();


    return (
        <div>
            <Layout>
                <Section className="hero is-fullheight has-background-light">
                    <div className="container">
                        <p className="center  index_title_style">lgy的小博客</p>
                        <SubTitle className="center index_title_style">
                            Record every day of life
                        </SubTitle>
                        <div>
                            <h4 className="center">{data.allMarkdownRemark.totalCount}篇小文章</h4>
                            <div className="container">
                                {group.map(({ node }) => (
                                    <div key={node.id} className="blog_style">
                                        <Link to={node.fields.slug}>
                                            <Card>
                                                <Card.Image src={node.frontmatter.image.childImageSharp.fluid.src} ratio='5by3' />
                                                <Card.Content>
                                                    <Media>
                                                        <Media.Content>
                                                            {/* <Title is='4'>John Smith</Title>
                                                    <SubTitle is='6'>@johnsmith</SubTitle> */}
                                                        </Media.Content>
                                                    </Media>
                                                    <Content>
                                                        {node.excerpt}
                                                        <br />
                                                        <small>{node.frontmatter.date}</small>
                                                    </Content>
                                                </Card.Content>
                                            </Card>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="pagination" id="pagination">
                        <NavLink test={first} url={previousUrl} text="<<<上一页" />
                        <NavLink test={last} url={nextUrl} text="下一页>>>" />
                    </div>
                </Section>
            </Layout>
        </div>
    );
};
export default IndexPage;