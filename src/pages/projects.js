import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Projects({ data }) {
  const { projects } = data.allMarkdownRemark;

  function renderTags(tags) {
    return tags.map((tag, i, arr) => {
      let lastArr = arr.length - 1 === i;

      return (
        <span>
          #{tag} {lastArr ? "" : ","}
        </span>
      );
    });
  }

  function renderProjectList() {
    return projects.map((project) => {
      const { fields, frontmatter, id } = project.node;

      return (
        <div className="grid gap-4 md:grid-cols-8" key={id}>
          <div className="h-64 md:h-auto md:col-span-2">
            <Img
              fluid={frontmatter.thumbnail.childImageSharp.fluid}
              className="h-full md:h-auto"
            />
          </div>
          <div className="pb-4 text-sm md:text-base border-dashed border-b-2 border-black md:pl-4 md:border-l-2 md:col-span-6">
            <p className="mb-3 nes-text is-primary text-xs">
              {renderTags(frontmatter.tags)}
            </p>
            <p className="mb-3 font-bold text-lg">{frontmatter.title}</p>
            <p className="mb-3">{frontmatter.description}</p>
            <p className="mb-3">Tech stacks : {frontmatter.tech_stacks}</p>
            <Link to={fields.slug} className="nes-btn is-primary">
              View
            </Link>
          </div>
        </div>
      );
    });
  }

  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className="mb-5 text-center text-3xl">Projects</h1>
      <p className="mb-3 text-sm md:text-base">
        Here a list of my projects that are open source or that I've had the
        honor of working on :
      </p>
      <div className="grid gap-6">{renderProjectList()}</div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ProjectListQuery {
    allMarkdownRemark(
      filter: { fields: { relativeDir: { regex: "/projects/" } } }
      sort: { order: ASC, fields: [frontmatter___title] }
    ) {
      projects: edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tech_stacks
            tags
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
