import {GatsbyNode} from "gatsby";
import path from "path";
import {Compilation} from "webpack";
import {PostLayoutType} from "./src/types";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({actions: {createTypes}}) => {
    createTypes(`
    type Mdx implements Node {
      frontmatter: MdxFrontmatter
    }

    type MdxFrontmatter {
      slug: String
      tags: [String]
      title: String
      code: String
      demo: String
      description: String
      date: Date @dateformat
      featuredImage: File @fileByRelativePath
      techs: [String]
    }
  `);
};


export const createPages: GatsbyNode["createPages"] = async ({graphql, actions, reporter}) => {
    const {createPage} = actions;
    const result = await graphql<PostLayoutType>(`
    {
      allMdx(sort: {frontmatter: {date: DESC}}) {
        edges {
          node {
            id
              frontmatter {
                slug
                title
                date
                description
                tags
                featuredImage {
                  publicURL
                }
                techs
              }
              internal {
                contentFilePath
              }
              body
              tableOfContents
          }
          next {
            frontmatter {
              slug
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP]
                    width: 50
                  )
                }
              }
            }
          }
          previous {
            frontmatter {
              slug
              title
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    formats: [AUTO, WEBP]
                    width: 50
                  )
                }
              }
            }
          }
        }
      }
    }
    `);

    if (result.errors) {
        console.log('Error Creating Projects', result.errors);
        return;
    }
    const postTemplate = path.resolve("src/templates/PostLayout.tsx");
    const posts = result.data?.allMdx.edges || [];
    posts.forEach(({node, next, previous}) => {
        const {id, frontmatter, internal: {contentFilePath}, tableOfContents} = node;
        createPage({
            path: frontmatter.slug,
            component: `${postTemplate}?__contentFilePath=${contentFilePath}`,
            context: {node, next, previous},
        });
    });
};

export const onCreateWebpackConfig: GatsbyNode["onCreateWebpackConfig"] = ({actions}) => {
    actions.setWebpackConfig({
        output: {
            filename: '[name].[fullhash].js', // Replace [hash] with [fullhash]
        },
        plugins: [
            {
                apply: (compiler: any) => {
                    compiler.hooks.compilation.tap('MyPlugin', (compilation: any) => {
                        compilation.getAssetPath = Compilation.prototype.getAssetPath; // Replace MainTemplate.getAssetPath
                    });
                },
            },
        ],
    });
};
