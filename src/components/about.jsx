import React from "react";
import { PropTypes } from "prop-types";
import { Link } from "react-scroll";

const About = ({ isResumeOpen }) => {
  return (
    <div id="about-section" style={{ zIndex: isResumeOpen ? "-1" : "1" }}>
      <div id="about-header">
        <span>
          <i className="fas fa-user-circle"></i>
        </span>
        <h2 className="section-headers"> About me </h2>
      </div>
      <div id="about-main">
        <div id="about-summary">
          <h1>
            {" "}
            Full-stack Web Developer, Fitness Enthusiast, Competitive Gamer{" "}
          </h1>
          <h2>
            {" "}
            My name is Kenny Zhou. I live in Chicago, Illinois. I am passionate
            about web development and UI/UX design.{" "}
          </h2>
          <p>
            I am all about learning and keeping up with state of the art
            technologies. I enjoy creating visually appealing and responsive
            websites/applications. Coming from a computer engineering background
            and moving to self taught web development, I am a highly versatile
            engineer and motivated learner. Having taken this route, I believe
            in continuously improving myself on a day to day basis, whether that
            be through code, communication, or any other aspects in life.
          </p>
          <p>
            The world will continuously dive deeper into the digital age, and
            with that, comes higher demand for web developers. I am currently
            open to opportunities in this industry. Whether you'd be interested
            in working with me or if you just want to ask me a few questions,
            I'd be more than happy to&nbsp;
            <Link
              to="contact-container"
              smooth={true}
              offset={120}
              duration={1000}
              style={{ textDecoration: "underline", cursor: "pointer" }}>
              hear from you!
            </Link>
          </p>
          <h3> Education: </h3>
          <p>
            {" "}
            B.S. Computer Engineering: University of Illinois at Chicago (2013 -
            2018){" "}
          </p>
        </div>
        <div id="about-description">
          <img
            id="about-img"
            alt="Kenny at a mural"
            src={new URL('../assets/profile2.png', import.meta.url).href}
          />
          <h1> Kenny Zhou </h1>
          <h2> Chicago, Illinois </h2>
          <h3> Web Developer </h3>
          <h3> UI/UX Designer </h3>
          <p>
            {" "}
            <span>
              <strong>Hobbies:</strong>
            </span>
            <br />
            Weight-lifting, Video games, Sports(basketball/volleyball)
          </p>
          <p>
            <span>
              <strong>Interests:</strong>
            </span>
            <br />
            Technology, Fitness, Anime
          </p>
          <Link
            to="contact-container"
            smooth={true}
            offset={120}
            duration={1000}>
            <button className="contact-btn">
              {" "}
              Contact Me <i className="fa fa-envelope"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

About.propTypes = {
  isResumeOpen: PropTypes.bool.isRequired,
};
