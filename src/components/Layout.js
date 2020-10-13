import React from "react";
import SEO from "./SEO";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <div
            id="root"
            className="w-10/12 mx-auto p-5 flex flex-col items-center"
        >
            <SEO />
            <Navbar />
            <main id="content-container">{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
