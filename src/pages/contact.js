import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <p className="mb-3 text-sm md:text-base">
        Need Front-End Dev to help your project? want to hire me? need my help?
        or just keep in touch or greetings?
      </p>
      <p className="mb-3 text-sm md:text-base">
        Knock my email at :{" "}
        <a
          href="mailto:itsmupin@mail.com"
          className="text-blue-600 hover:text-blue-800"
        >
          itsmupin@gmail.com
        </a>
      </p>
      <p className="mb-3 text-sm md:text-base">
        Follow my{" "}
        <a
          href="https://github.com/mupinnn"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          GitHub
        </a>
      </p>
      <p className="mb-3 text-sm md:text-base">
        Get in touch with me at{" "}
        <a
          href="https://www.linkedin.com/in/ahmad-muwaffaq/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          LinkedIn
        </a>
      </p>
    </Layout>
  );
}
