import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';

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
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <meta name='description' content={data.site.siteMetadata.description} />
      </Helmet>

      <Img fixed={data.image.childImageSharp.fixed} />
    </div>
  );
};

export default Home;
