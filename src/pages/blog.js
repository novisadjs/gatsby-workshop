import React from 'react';
import { graphql, Link } from 'gatsby';

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark {
      posts: nodes {
        frontmatter {
          date(fromNow: true)
          title
          author
          slug
        }
        excerpt
        id
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
          <Link to={`/blog/${post.frontmatter.slug}`}>
            <h2>{post.frontmatter.title}</h2>
          </Link>
          <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
          <p>{post.excerpt}</p>
        </article>
      ))}
    </div>
  );
};
