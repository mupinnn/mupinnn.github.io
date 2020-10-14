import React, { Fragment } from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div
            id="root"
            className="w-full relative p-5 grid auto-rows-fr gap-4 md:w-10/12 md:mx-auto xl:w-8/12"
        >
            <SEO />
            <Navbar />
            <main
                id="content-container"
                className="w-full p-5 nes-container bg-white is-rounded shadow-2xl"
            >
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
