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
import useStyles from "../style/cardStyle";
import Footer from "../components/Footer/Footer";
import DrawerLeft from "../components/Drawer/DrawerLeft"

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

const IndexPage = ({ data, pathContext }) => {
    const { group, index, first, last, pageCount } = pathContext;
    const previousUrl = index - 1 == 1 ? "" : (index - 1).toString();
    const nextUrl = (index + 1).toString();
    const classes = useStyles();

    return (
        <div>
            <DrawerLeft/>
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
                        <div className="columns is-multiline">
                            {group.map(({ node }) => (
                                <div className="column is-one-third">
                                    <div key={node.id} className="blog_style">
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
                                                    title="Shrimp and Chorizo Paella"
                                                    subheader="September 14, 2016"
                                                />
                                                <CardMedia
                                                    className={classes.media}
                                                    image={
                                                        node.frontmatter.image.childImageSharp.fluid.src
                                                    }
                                                    title="Paella dish"
                                                />
                                                <CardContent>
                                                    <Typography
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                    >
                                                        This impressive paella is a perfect party dish and a
                                                        fun meal to cook together with your guests. Add 1
                                                        cup of frozen peas along with the mussels, if you
                                                        like.
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
            <Footer />
        </div>
    );
};
export default IndexPage;
