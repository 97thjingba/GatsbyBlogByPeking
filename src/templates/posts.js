import React from "react";
import Header from "../components/Header/Header";
import { Link, graphql } from "gatsby";
import { Section, SubTitle, Media, Content, Title } from "reactbulma";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import "./posts.css";
import useStyles from "../style/postsCardStyle";
import Footer from "../components/Footer/Footer";
import styled from "styled-components";

const NavLink = props => {
    if (!props.test) {
        return (
            <Link to={props.url} id="navlink" className="has-text-primary">
                {props.text}
            </Link>
        );
    } else {
        return <span>{props.text}</span>;
    }
};

const ColumnsBox = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  @media (max-width: 768px) {
    width: 107%;
  }
`;

const ColumnBox = styled.section`
  display: block;
  flex: none;
  width: 33.333333%;
  padding: 0.75rem;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;

const ContentBox = styled.section`
  margin-top: 5rem;
`;

const PaginationBox = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;
//添加完毕blog以后，必须修改一下graphql 查询

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
          excerpt(pruneLength: 50)
        }
      }
    }
  }
`;

const IndexPage = ({ data, pageContext }) => {
    const { group, index, first, last, pageCount } = pageContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const classes = useStyles();

    return (
        <div>
            <Header />
            <Section className="hero is-fullheight has-background-light">
                <div className="container">
                    <p className="center  index_title_style">lgy的小博客</p>
                    <SubTitle className="center index_title_style">
                        Record every day of life
                    </SubTitle>
                    <div>
                        <h4 className="center">
                            {data.allMarkdownRemark.totalCount}篇小文章
                        </h4>
                        <ColumnsBox>
                            {group.map(({ node }) => (
                                <ColumnBox>
                                    <ContentBox key={node.id}>
                                        <Card className={classes.card}>
                                            <Link to={node.fields.slug}>
                                                <CardHeader
                                                    avatar={
                                                        <Avatar
                                                            aria-label="Recipe"
                                                            className={classes.avatar}
                                                        >
                                                            R
                                                        </Avatar>
                                                    }
                                                    action={
                                                        <IconButton aria-label="Settings">
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    }
                                                    title={node.frontmatter.title}
                                                    subheader={node.frontmatter.date}
                                                />
                                                <CardMedia
                                                    className={classes.media}
                                                    image={
                                                        node.frontmatter.image.childImageSharp.fluid.src
                                                    }
                                                    title="Paella dish"
                                                />
                                                <CardContent>
                                                    <Typography variant="body2" color="textSecondary">
                                                        {node.frontmatter.coverText}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions disableSpacing>
                                                    <IconButton aria-label="Add to favorites">
                                                        <FavoriteIcon />
                                                    </IconButton>
                                                    <IconButton aria-label="Share">
                                                        <ShareIcon />
                                                    </IconButton>
                                                </CardActions>
                                            </Link>
                                        </Card>
                                    </ContentBox>
                                </ColumnBox>
                            ))}
                        </ColumnsBox>
                    </div>
                </div>
                <PaginationBox>
                    <NavLink test={first} url={previousUrl} text="<<<上一页" />
                    <NavLink test={last} url={nextUrl} text="下一页>>>" />
                </PaginationBox>
            </Section>
            <Footer />
        </div>
    );
};
export default IndexPage;
