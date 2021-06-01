import React from "react";
import Layout from "../components/Layout";

import avatar from "../images/my-avatar.png";

export default function Home() {
  return (
    <Layout>
      <div className="w-full flex justify-center items-center">
        <img
          src={avatar}
          alt="my avatar"
          className="w-32 rounded-full border-4 border-black"
          style={{
            imageRendering: "pixelated",
          }}
        />
      </div>
      <div className="w-full mt-5">
        <h1 className="mb-5 text-3xl">Hola!</h1>
        <p className="mb-3 text-sm md:text-base">
          Welcome to my website. You can know me more through this website. I
          love simple but eye-catching interface, so "why not make it pixelated
          like 90's game?".
        </p>
        <p className="mb-3 text-sm md:text-base">
          In the mid 2019, I found a cool CSS framework called{" "}
          <a
            href="https://nostalgic-css.github.io/NES.css/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800"
          >
            NES.css
          </a>{" "}
          that have NES-styles interface and some pre-built component to help
          you create a website with pixelated/NES-styled. So, I decided to use
          it on my portfolio website.
        </p>
      </div>
    </Layout>
  );
}
