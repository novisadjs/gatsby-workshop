import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
  query BlogQuery {
    blog: allContentfulPost {
      posts: nodes {
        id
        author
        createdAt(fromNow: true)
        slug
        title
        thumbnail {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const { posts } = data.blog;

  return (
    <div>
      <Link to='/'>Home</Link>

      {posts.map(post => (
        <article key={post.id}>
          <Link to={`/blog/${post.slug}`}>
            <h2>{post.title}</h2>
          </Link>
          <small>{post.author}, {post.createdAt}</small>
          <Img fluid={post.thumbnail.fluid} />
        </article>
      ))}
    </div>
  );
};
