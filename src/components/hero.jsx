import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-scroll";

const Hero = ({ isNavActive, showResumeModal }) => {
  return (
    <div
      id="hero-section"
      style={{
        opacity: isNavActive ? "0" : null,
        zIndex: isNavActive ? "100" : "-5",
        transitionDelay: isNavActive ? "0s" : "0.5s",
      }}>
      <div id="hero-content" data-aos="fade-right" data-aos-delay="1000">
        <h2> Hi, my name is Kenny! </h2>
        <h3>
          {" "}
          I am a self taught <span>web developer</span> and{" "}
          <span>designer.</span> Take a look at some of&nbsp;
          <Link
            to="portfolio-container"
            smooth={true}
            duration={1000}
            offset={-100}
            style={{ textDecoration: "underline", cursor: "pointer" }}>
            my work.
          </Link>
        </h3>
        <h3>
          {" "}
          Interested in hiring? Here's my&nbsp;
          <span
            style={{ textDecoration: "underline", cursor: "pointer" }}
            onClick={showResumeModal}
            data-testid="toggle-resume-span">
            resume.
          </span>
        </h3>
        <Link to="contact-container" smooth={true} offset={120} duration={1000}>
          <button className="contact-btn">
            {" "}
            Work with me <i className="fa fa-envelope"></i>
          </button>
        </Link>
        <a
          href="https://github.com/kenford20"
          target="_blank"
          rel="noopener noreferrer"
          id="github-link">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/kenny-zhou-35a039177/"
          target="_blank"
          rel="noopener noreferrer"
          id="linkedin-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <span
          id="resume-link"
          onClick={showResumeModal}
          data-testid="toggle-resume-btn">
          <i className="fas fa-file"></i>
        </span>
      </div>
      <img
        id="hero-img"
        data-aos="fade-in"
        src={new URL('../assets/hero3.png', import.meta.url).href}
        alt="hero"
      />
    </div>
  );
};

export default Hero;

Hero.propTypes = {
  isNavActive: PropTypes.bool.isRequired,
  showResumeModal: PropTypes.func.isRequired,
};
