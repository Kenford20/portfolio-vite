import React from "react";
import Project from "./resume-project-template";
import { PropTypes } from "prop-types";

const Resume = ({ isOpen, hideModal }) => {
  return (
    <React.Fragment>
      <div
        id="modal-background"
        style={{
          opacity: isOpen ? "0.7" : "0",
          display: isOpen ? "block" : "none",
        }}
        onClick={hideModal}
        data-testid="modal-background"></div>
      <div
        className="animate"
        id="resume-modal"
        data-testid="resume-modal"
        style={{
          transform: isOpen ? "scale(1)" : "scale(0)",
          top: isOpen ? "100px" : "-300px",
        }}>
        <span id="close-modal" onClick={hideModal}></span>
        <h1>
          {" "}
          <strong>Resume</strong>{" "}
        </h1>
        <p id="resume-link-modal">
          {" "}
          You can also view my resume{" "}
          <a href="#" target="__blank" rel="noopener noreferrer">
            {" "}
            here.{" "}
          </a>
        </p>

        <section id="resume-projects">
          <h2 className="resume-section-headers">Projects</h2>
          <Project
            title="Portfolio Website"
            technologies="React.js, Email.js, Sass(SCSS)"
            liveLink="https://kenford-portfolio.web.app/"
            githubLink="https://github.com/Kenford20/Portfolio"
            bulletPoints={[
              "Developed my portfolio website from ground up using front end technologies like React and Sass",
              "Integrated Email.js library and Mailgun services to support emailing capabilities without the help of a back end server",
            ]}
          />
          <Project
            title="C.A. Jewelers Inc."
            technologies="MongoDB, Express.js, React.js, Redux, Node.js, Bootstrap"
            liveLink="https://ca-jewelers.web.app/"
            githubLink="#"
            bulletPoints={[
              "Built a full stack eCommerce website from scratch as an SPA with multiple routes using React Router",
              "Designed and developed fully responsive layouts, interfaces, and functionalities for each page",
              "Utilized a MongoDB database to store client data and import dynamic content to the product catalogs via server-side, custom REST APIs",
              "Used Amazon S3 services for image hosting to optimize website performance and file size",
            ]}
          />
          <Project
            title="Kodo Namaewaz"
            technologies="JavaScript, Node.js, Socket.io, HTML"
            liveLink="https://kodo-namaewaz.web.app/"
            githubLink="https://github.com/Kenford20/Kodo-Namaewas-Heroku"
            bulletPoints={[
              "Constructed an interactive browser version of the board/card game, Codenames",
              "Incorporated web socket programming to enable multiple users to play together across different devices",
              "Modeled the game play and rules of Codenames through vanilla JavaScript events and DOM manipulation",
            ]}
          />
          <Project
            title="Speed Typing Test"
            technologies="JavaScript, HTML, CSS"
            liveLink="https://kenford20.github.io"
            githubLink="https://github.com/Kenford20/Kenford20.github.io"
            bulletPoints={[
              "Created an interactive web application using only vanilla technologies",
              "Implemented a variety of typing tests using vanilla AJAX calls to several public APIs",
            ]}
          />
        </section>

        <section id="resume-skills">
          <h2 id="skills-header" className="resume-section-headers">
            Programming Technologies
          </h2>
          <p>
            {" "}
            JavaScript(ES6) | HTML5 | CSS3 | React | Redux | Node | Bootstrap |
            jQuery | MongoDB | Git | Sass{" "}
          </p>
        </section>

        <section id="resume-education">
          <h2 id="education-header" className="resume-section-headers">
            Education
          </h2>
          <div className="education-headers">
            <h3>FreeCodeCamp.org</h3>
            <h4>July - December 2018</h4>
          </div>
          <p>Front-End Web Development</p>
          <ul>
            <li>
              Completed 1000+ hours of coursework and algorithm challenges,
              earning several front end certifications
            </li>
          </ul>
          <div className="education-headers">
            <h3>University of Illinois at Chicago</h3>
            <h4>2013 - 2018</h4>
          </div>
          <p>Bachelor of Science in Computer Engineering</p>
          <ul>
            <li>
              Worked on multi-disciplinary projects at UIC's robotics club,
              Engineering Design Team
            </li>
            <li>
              Competed in Oakland University's annual Intelligent Ground Vehicle
              Competition
            </li>
          </ul>
        </section>

        <section id="resume-experience">
          <h2 id="experience-header" className="resume-section-headers">
            Experience
          </h2>
          <div className="experience-headers">
            <h3>
              <strong>Ivy Garden Learning Center</strong> | Lead Tutor
            </h3>
            <h4>2014 - Present</h4>
          </div>
          <ul>
            <li>
              Mentor grammar school students on fundamental subjects such as
              math, reading, writing, social studies, and science
            </li>
            <li>Assist with daily homework, projects, and test preparations</li>
            <li>Teach and supervise classrooms of up to 25 students</li>
            <li>
              Review and grade test material regarding schools' current
              curriculum
            </li>
          </ul>
        </section>
      </div>
    </React.Fragment>
  );
};

export default Resume;

Resume.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  hideModal: PropTypes.func.isRequired,
};
