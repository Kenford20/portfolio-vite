import React, { useState } from "react";
import { PropTypes } from "prop-types";

const CodepenProject = ({ imgKey, altTag, title, description, projectUrl }) => {
  const [isTextActive, toggleText] = useState(false);

  const imgPaths = {
    piano: "src/images/codepen/piano.png",
    pomodoroClock: "src/images/codepen/pomodoro-clock.png",
    quoteMachine: "src/images/codepen/quote-machine.png",
    markdownPreviewer: "src/images/codepen/markdown-previewer.png",
    calculator: "src/images/codepen/calculator.png",
  };

  return (
    <div className="codepen-item">
      <div
        className="project-img-wrapper"
        onMouseOver={() => toggleText(true)}
        onMouseLeave={() => toggleText(false)}>
        <img
          src={imgPaths[imgKey]}
          alt={altTag}
          style={{ opacity: isTextActive ? "0.1" : "1" }}></img>
      </div>
      <div
        className="project-description"
        onMouseOver={() => toggleText(true)}
        onMouseLeave={() => toggleText(false)}
        style={{ opacity: isTextActive ? "1" : "0" }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={projectUrl} target="_blank" rel="noopener noreferrer">
          View Pen
        </a>
      </div>
    </div>
  );
};

export default CodepenProject;

CodepenProject.propTypes = {
  imgKey: PropTypes.string.isRequired,
  altTag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projectUrl: PropTypes.string.isRequired,
};
