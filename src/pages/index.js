import React from 'react';
import { graphql } from 'gatsby';

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(base: {eq: "logo.png"}) {
      publicURL
    }
  }
`;

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>

      <img src={data.image.publicURL} />
    </div>
  );
};

export default Home;
