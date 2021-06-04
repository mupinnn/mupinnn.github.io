const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const relativeDir = getNode(node.parent).relativeDirectory;
    const slug = createFilePath({ node, getNode, basePath: "pages" });

    createNodeField({
      node,
      name: "relativeDir",
      value: relativeDir,
    });

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const contents = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  contents.data.allMarkdownRemark.edges.forEach((content) => {
    createPage({
      path: content.node.fields.slug,
      component: path.resolve("./src/templates/content.js"),
      context: {
        slug: content.node.fields.slug,
      },
    });
  });
};
