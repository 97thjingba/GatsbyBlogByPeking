import React from "react"
// import { css } from "react-emotion"
// import { rhythm } from "../utils/typography"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { Container,Section,Title,SubTitle} from 'reactbulma'
import './posts.css'

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
    }
  }
`

const IndexPage = ({ data, pathContext }) => {
  const { group, index, first, last, pageCount } = pathContext;
  const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
  const nextUrl = (index + 1).toString();
  console.log(group)

  return (
    <div>
        <Layout>
            <Section className="hero is-fullheight has-background-light">
              <div className="container">
                  <p className="center  index_title_style">李贝贝的小博客</p>
                  <SubTitle className="center index_title_style">
                    Record every day of life
                  </SubTitle>
                  <div>
                    <h4 className="center">{data.allMarkdownRemark.totalCount}篇小文章</h4>
                    {group.map(({ node }) => (
                        <div key={node.id} className="blog_style box">
                            <article className="media">
                                <div className="media-left">
                                    <figure class="image is-64x64">
                                        <img src="https://bulma.io/images/placeholders/128x128.png"></img>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="content">
                                        <Link to={node.fields.slug}>
                                        <h3 className="title center">
                                            {node.frontmatter.title}
                                            <span className="subtitle center"> 
                                                — {node.frontmatter.date}
                                            </span>
                                        </h3>
                                        <p className="center index_article_style ">{node.excerpt}</p>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        </div>
                    ))}
                  </div>
                  </div>
                <div className=" pagination">
                    <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
                    <NavLink test={last} url={nextUrl} text="Go to Next Page" /> 
                </div>
                  
            </Section>
      </Layout>
    </div>
  );
};
export default IndexPage;