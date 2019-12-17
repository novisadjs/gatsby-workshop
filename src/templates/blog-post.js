import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        author
        date(fromNow: true)
        slug
        title
      }
      html
    }
  }
`;

export default ({ data }) => {
  const { post } = data;

  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <small>{post.frontmatter.author}, {post.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};
