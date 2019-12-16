import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    image: file(base: {eq: "logo.png"}) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const Home = ({ data }) => {
  return (
    <div>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.description}</p>

      <Img fixed={data.image.childImageSharp.fixed} />
    </div>
  );
};

export default Home;
