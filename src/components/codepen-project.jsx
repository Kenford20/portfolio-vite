import React, { useState } from "react";
import { PropTypes } from "prop-types";

const CodepenProject = ({ imgKey, altTag, title, description, projectUrl }) => {
  const [isTextActive, toggleText] = useState(false);

  const imgPaths = {
    piano: new URL('../assets/codepen/piano.png', import.meta.url).href,
    pomodoroClock: new URL('../assets/codepen/pomodoro-clock.png', import.meta.url).href,
    quoteMachine: new URL('../assets/codepen/quote-machine.png', import.meta.url).href,
    markdownPreviewer: new URL('../assets/codepen/markdown-previewer.png', import.meta.url).href,
    calculator: new URL('../assets/codepen/calculator.png', import.meta.url).href,
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
