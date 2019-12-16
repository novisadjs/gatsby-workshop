import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query BlogPostQuery {
    post: file(base: {eq: "awesome-blog-post.md"}) {
      content: childMarkdownRemark {
        frontmatter {
          author
          date(fromNow: true)
          title
        }
        html
      }
    }
  }
`;

export default ({ data }) => {
  const { content } = data.post;

  return (
    <div>
      <h1>{content.frontmatter.title}</h1>
      <small>{content.frontmatter.author}, {content.frontmatter.date}</small>
      <div dangerouslySetInnerHTML={{ __html: content.html }} />
    </div>
  );
};
