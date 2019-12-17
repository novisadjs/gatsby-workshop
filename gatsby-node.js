const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const markdownFiles = await graphql(`
    query AllMarkdownQuery {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }`);

  if (markdownFiles.errors) {
    reporter.panicOnBuild(`Error while creating pages!`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

  markdownFiles.data.allMarkdownRemark.nodes.forEach((markdownFile) => {
    createPage({
      path: `blog/${markdownFile.frontmatter.slug}`,
      component: blogPostTemplate,
      context: {
        slug: markdownFile.frontmatter.slug
      }
    })
  })
}
