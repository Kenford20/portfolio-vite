import React from "react";
import { PropTypes } from "prop-types";

import "../styles/resume-project-template.scss";

class Project extends React.Component {
  render() {
    const { bulletPoints, title, technologies, liveLink, githubLink } =
      this.props;
    let projectBullets = (
      <ul className="project-bullets">
        {bulletPoints.map((description, index) => (
          <li key={index}>{description}</li>
        ))}
      </ul>
    );
    return (
      <div id="project-container">
        <h3 className="project-titles">
          <strong>{title}</strong>
        </h3>
        <p className="project-technologies">{technologies} </p>
        <div className="project-links">
          <a href={liveLink} target="__blank" rel="noopener noreferrer">
            Live
          </a>
          <span> | </span>
          <a href={githubLink} target="__blank" rel="noopener noreferrer">
            Github
          </a>
        </div>
        {projectBullets}
      </div>
    );
  }
}

export default Project;

Project.propTypes = {
  bulletPoints: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};
