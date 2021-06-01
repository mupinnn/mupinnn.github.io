import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const [nav_open, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!nav_open);
  };

  return (
    <nav className="sticky top-0 z-20">
      <div className="w-full nes-btn shadow-lg lg:hidden" onClick={toggleNav}>
        Menu
      </div>
      <div
        className={`fixed bottom-0 inset-x-0 z-30 ${
          nav_open ? `grid` : `hidden`
        } auto-rows-fr gap-4 text-center p-4 nes-container bg-white is-rounded lg:static lg:grid lg:grid-cols-4 lg:w-full`}
      >
        <div id="close-nav" className="lg:hidden" onClick={toggleNav}>
          <i className="nes-icon close p-0 mx-auto static"></i>
        </div>
        <Link to="/" className="nes-btn is-warning" activeClassName="is-error">
          Home
        </Link>
        <Link
          to="/about/"
          className="nes-btn is-warning"
          activeClassName="is-error"
        >
          About
        </Link>
        <Link
          to="/projects/"
          className="nes-btn is-warning"
          activeClassName="is-error"
        >
          Projects
        </Link>
        <Link
          to="/contact/"
          className="nes-btn is-warning"
          activeClassName="is-error"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
