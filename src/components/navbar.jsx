import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-scroll";

const Navbar = ({ isActive, toggle }) => {
  return (
    <div id="navbar" data-testid="navbar">
      <span> &lt;Kenny Zhou/&gt;</span>
      <nav
        style={{
          opacity: isActive ? "1" : null,
          zIndex: isActive ? "100" : "-5",
          transitionDelay: isActive ? "0.5s" : "0s",
        }}
      >
        <Link to="hero-container" smooth={true} offset={-70} duration={1000}>
          Home
        </Link>
        <Link to="about-container" smooth={true} duration={1000}>
          About
        </Link>
        <Link to="codepen" smooth={true} duration={1000}>
          Codepen
        </Link>
        <Link
          to="portfolio-container"
          smooth={true}
          offset={-70}
          duration={1000}
        >
          Portfolio
        </Link>
        <Link to="contact-container" smooth={true} offset={120} duration={1000}>
          Contact
        </Link>
      </nav>
      <div id="hamburger-menu" onClick={toggle} data-testid="hamburger-menu">
        <span
          style={{ background: isActive ? "transparent" : "white" }}
          className={isActive ? "spin spin2" : null}
        ></span>
      </div>
    </div>
  );
};

export default Navbar;

Navbar.propTypes = {
  isActive: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
