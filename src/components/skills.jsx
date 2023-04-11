import React from "react";

const Skills = () => {
  return (
    <div id="skills-section">
      <div id="skills-header">
        <i className="fas fa-desktop"></i>
        <h2> Technologies I Use </h2>
      </div>
      <div id="skills-items-wrapper" data-aos="fade-in" data-aos-delay="100">
        <div className="skills-item">
          <i className="fab fa-html5"></i>
          <h5>HTML</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="300">
          <i className="fab fa-css3"></i>
          <h5>CSS</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="500">
          <i className="fab fa-js"></i>
          <h5>Javascript</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="700">
          <i className="fab fa-node"></i>
          <h5>NodeJS</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="900">
          <i className="fab fa-react"></i>
          <h5>ReactJS</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="950">
          <img
            id="mongodb-icon"
            alt="mongodb icon"
            src={new URL('../assets/mongodb-icon.png', import.meta.url).href}></img>
          <h5>MongoDB</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="550">
          <div id="bootstrap-icon">B</div>
          <h5>Bootstrap</h5>
        </div>
        <div className="skills-item" data-aos="fade-in" data-aos-delay="250">
          <i className="fab fa-sass"></i>
          <h5>Sass</h5>
        </div>
      </div>
    </div>
  );
};

export default Skills;
