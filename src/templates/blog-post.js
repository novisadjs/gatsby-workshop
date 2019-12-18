import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
  query($slug: String!) { 
    post: contentfulPost(slug: { eq: $slug }) {
      author
      createdAt(fromNow: true)
      subtitle
      title
      thumbnail {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        formats: childContentfulRichText {
          html
        }
      }
    }
  }
`;

export default ({ data }) => {
  const { post } = data;

  return (
    <div>
      <h1>{post.title}</h1>
      <small>{post.author}, {post.createdAt}</small>
      <Img fluid={post.thumbnail.fluid} />
      <div dangerouslySetInnerHTML={{ __html: post.content.formats.html }} />
    </div>
  );
};
