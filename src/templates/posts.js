import React from 'react';
import { Link, graphql } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styled from 'styled-components';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import useStyles from '../style/postsCardStyle';
import NavLink from '../components/Pagination/NavLink';
import Footer from '../components/Footer/Footer';

import Header from '../components/Header/Header';

const SectionBox = styled.div`
  min-height: 100vh;
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContainerBox = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 0 0 0;
  }
`;

const BlogTitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
`;

const SubTitleBox = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ColumnsBox = styled.div`
  display: flex;
  width: 90%;
  flex-wrap: wrap;
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;

  @media (max-width: 768px) {
    width: 120%;
  }
`;

const ColumnBox = styled.div`
  display: block;
  flex: none;
  width: 33.333333%;
  padding: 0.75rem;

  @media (max-width: 768px) {
    width: -webkit-fill-available;
  }
`;

const ContentBox = styled.div`
  margin-top: 5rem;
`;

const PaginationBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2rem;
`;
// 添加完毕blog以后，必须修改一下graphql 查询

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
    const {
        group, index, first, last,
    } = pageContext;
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString();
    const nextUrl = `//${(index + 1).toString()}`;
    const classes = useStyles();

    return (
        <div>
            <Header />
            <SectionBox>
                <ContainerBox>
                    <BlogTitle>lgy的小博客</BlogTitle>
                    <SubTitleBox>
                        {data.allMarkdownRemark.totalCount}
篇小文章
                    </SubTitleBox>
                    <BlogContent>
                        <ColumnsBox>
                            {group.map(({ node }) => (
                                <ColumnBox>
                                    <ContentBox key={node.id}>
                                        <Card className={classes.card}>
                                            <CardHeader
                                                avatar={(
                                                    <Avatar
                                                        aria-label="Recipe"
                                                        className={classes.avatar}
                                                    >
                                                        R
                                                    </Avatar>
                                                )}
                                                action={(
                                                    <IconButton aria-label="Settings">
                                                        <MoreVertIcon />
                                                    </IconButton>
                                                )}
                                                title={node.frontmatter.title}
                                                subheader={node.frontmatter.date}
                                            />
                                            <Link to={node.fields.slug}>
                                                <CardMedia
                                                    className={classes.media}
                                                    image={
                                                        node.frontmatter.image.childImageSharp.fluid.src
                                                    }
                                                    title="Paella dish"
                                                />
                                            </Link>
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
                                        </Card>
                                    </ContentBox>
                                </ColumnBox>
                            ))}
                        </ColumnsBox>
                    </BlogContent>
                </ContainerBox>
                <PaginationBox>
                    <NavLink
                        test={first}
                        url={previousUrl}
                        component={<FaAngleDoubleLeft />}
                    />
                    <NavLink
                        test={last}
                        url={nextUrl}
                        component={<FaAngleDoubleRight />}
                    />
                </PaginationBox>
            </SectionBox>
            <Footer />
        </div>
    );
};
export default IndexPage;
