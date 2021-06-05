import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Content({ data }) {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <SEO title={frontmatter.title} description={frontmatter.description} />
      <h1 className="mb-5 text-center text-2xl md:text-3xl">
        {frontmatter.title}
      </h1>
      <article
        className="prose prose-sm text-gray-800 md:prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ContentPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        description
      }
      html
    }
  }
`;
