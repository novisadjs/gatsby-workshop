const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const response = await graphql(`
    query ContentfulPostsQuery {
      blog: allContentfulPost {
        posts: nodes {
          slug
        }
      }
    }
  `);

  if (response.errors) {
    reporter.panicOnBuild(`Error while creating pages!`);
    return;
  }

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  response.data.blog.posts.forEach((post) => {
    createPage({
      path: `blog/${post.slug}`,
      component: blogPostTemplate,
      context: {
        slug: post.slug
      },
    });
  });
}
