/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          slug
          id
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild("🚨  ERROR: Loading \"createPages\" query")
  }
  // Create blog post pages.
  const posts = result.data.allMdx.nodes
  // you'll call `createPage` for each result
  posts.forEach(({ slug, id }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: slug,
      // This component will wrap our MDX content
      component: path.resolve(`./src/components/PostLayout.jsx`),
      // You can use the values in this context in
      // our page layout component
      context: { id: id }
    })
  })
}
