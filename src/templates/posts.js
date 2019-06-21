import React from "react"
import Layout from "../components/layout"
import { Link, graphql, } from "gatsby"
import { Card, Section, SubTitle, Media, Content,Title } from 'reactbulma'
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
            excerpt(pruneLength:111)
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
                            <div className="columns is-multiline">
                                {group.map(({ node }) => (
                                    <div className="column is-one-third">
                                        <div key={node.id} className="blog_style">
                                            <Link to={node.fields.slug}>
                                                <Card className="card_style">
                                                    <Card.Image src={node.frontmatter.image.childImageSharp.fluid.src} ratio='5by3' />
                                                    <Card.Content>
                                                        <Media>
                                                            <Media.Content>
                                                                <Title is='4'>
                                                                    test_title
                                                                </Title>
                                                                <SubTitle is='6'>
                                                                    @Peking
                                                                </SubTitle>
                                                            </Media.Content>
                                                        </Media>
                                                        <Content>
                                                            {node.excerpt}
                                                            {/* <small>{node.frontmatter.date}</small> */}
                                                        </Content>
                                                    </Card.Content>
                                                </Card>
                                            </Link>
                                        </div>
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