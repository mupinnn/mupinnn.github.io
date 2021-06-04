import React from "react";
import Layout from "../components/Layout";

export default function Content({ pageContext }) {
  const { slug } = pageContext;

  return (
    <Layout>
      <h1>Template content</h1>
      <p>Slug: {slug}</p>
    </Layout>
  );
}
