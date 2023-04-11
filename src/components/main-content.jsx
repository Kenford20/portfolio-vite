import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-scroll";

const Main = ({ isResumeOpen }) => {
  return (
    <div id="main-content" style={{ zIndex: isResumeOpen ? "-1" : "1" }}>
      <div className="main-item">
        <i className="fab fa-html5"></i>
        <h2> Web Development </h2>
        <p>
          As a developer who's worked with the full-stack, I have a good
          understanding of how a website/application works both on the frontend
          and backend. I mainly develop in JavaScript, HTML, and CSS, with the
          help of technologies such as React.js, and Node.js. I am open to
          learning and employing any additional libraries/frameworks to get the
          job done. I build static sites, eCommerce sites, web applications, and
          more!
        </p>
        <Link
          to="portfolio-container"
          offset={-100}
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}>
          {" "}
          Go to portfolio &gt;
        </Link>
      </div>
      <div className="main-item">
        <i className="fab fa-codepen"></i>
        <h2> Codepen Work </h2>
        <p>
          In addition to any portfolio projects, I have many other smaller, web
          development projects that I enjoy building on Codepen. This is a great
          sandbox environment to turn some of my unique ideas into creations.
          Codepen is also useful for learning and practicing different
          technologies without the hassle of a workflow setup. Hosted here are
          several of my projects from online courses required to earn multiple
          certifications.{" "}
        </p>
        <Link
          to="codepen"
          smooth={true}
          duration={1000}
          style={{ cursor: "pointer" }}>
          {" "}
          Browse Projects &gt;
        </Link>
      </div>
      <div className="main-item">
        <i className="fas fa-code"></i>
        <h2> Certifications </h2>
        <p>
          Curious about my qualifications? Before developing any project, I make
          sure to educate myself on any technologies that may be needed to
          produce a working product. I have utilized many online resources to
          aide my learning process. One of the most popular ones is
          Freecodecamp.org. After completing over 1000 hours of coursework, I
          earned several web development certificates.
        </p>
        <a
          href="https://www.freecodecamp.org/kenford"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          View certificates &gt;{" "}
        </a>
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  isResumeOpen: PropTypes.bool.isRequired,
};
