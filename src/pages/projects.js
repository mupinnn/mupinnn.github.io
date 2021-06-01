import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

import bloq from "../images/projects/bloq-preview-half.png";
import garena from "../images/projects/garena-logo.png";

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <h1 className="mb-5 text-center text-3xl">Projects</h1>
      <p className="mb-4 text-sm md:text-base">Here a list of my projects :</p>
      <div className="grid auto-rows-fr gap-6">
        <div className="grid auto-rows-fr gap-4 md:grid-cols-8">
          <img src={bloq} alt="bloq" className="md:col-span-2" />
          <div className="pb-4 border-dashed border-b-2 border-black md:pl-4 md:border-l-2 md:col-span-6">
            <div>
              <p className="mb-3 font-bold text-lg">Bloq</p>
              <p className="mb-3 text-sm md:text-base">
                Minimalist, responsive blog theme for Tailwind CSS
              </p>
              <p className="mb-3 text-sm md:text-base">
                Tech : TailwindCSS, Gulp.
              </p>
            </div>
            <a
              href="https://mupinnn.github.io/bloq"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-primary mb-4 mr-4"
            >
              Preview
            </a>
            <a
              href="https://github.com/mupinnn/bloq"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn mb-4 mr-4"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="grid auto-rows-fr gap-4 md:grid-cols-8">
          <img src={garena} alt="bloq" className="md:col-span-2" />
          <div className="pb-4 border-dashed border-b-2 border-black md:pl-4 md:border-l-2 md:col-span-6">
            <div>
              <p className="mb-3 font-bold text-lg">
                Garena Indonesia Internship
              </p>
              <p className="mb-3 text-sm md:text-base">
                I do a lot of fun work here and also learned a lot as a
                Front-End Engineer.
              </p>
              <p className="mb-3 text-sm md:text-base">
                Tech : React, Redux, SCSS, NextJS, Directus, Socket.io, CSS
                Animation
              </p>
            </div>
            <a
              href="https://docs.google.com/document/d/1IzuWHx6ymFPWNFwctNEC3X6VmFNwmCV7qA6Yf_PeYd8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="nes-btn is-primary"
            >
              Take a look
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
