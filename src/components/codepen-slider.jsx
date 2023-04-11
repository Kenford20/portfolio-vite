import React from "react";
import Slider from "react-slick";
import CodepenProject from "./codepen-project";

import { settings } from "./codepen-slider-settings";

const Codepen = () => {
  return (
    <div id="codepen-container">
      <Slider {...settings}>
        <CodepenProject
          imgKey="calculator"
          altTag="calculator pen thumbnail"
          title="React Calculator"
          description="JavaScript calculator made with React that utilizes formula logic and observes order of operation precedence. Supports both keyboard/mouse inputs!"
          projectUrl="https://codepen.io/Kenford/pen/MzOqxm"
        />
        <CodepenProject
          imgKey="piano"
          altTag="piano pen thumbnail"
          title="HTML Piano"
          description="Musical keyboard made from HTML elements and CSS with audio functionality triggered by jQuery. Supports both keyboard/mouse inputs!"
          projectUrl="https://codepen.io/Kenford/pen/xQqvwe"
        />
        <CodepenProject
          imgKey="quoteMachine"
          altTag="quote machine pen thumbnail"
          title="Random Quote Machine"
          description="Pulls random quotes from a public API and is displayed onto the screen with a simple animation."
          projectUrl="https://codepen.io/Kenford/pen/ZmbPML"
        />
        <CodepenProject
          imgKey="markdownPreviewer"
          altTag="markdown previewer pen thumbnail"
          title="Markdown Previewer"
          description="Takes text in an HTML textarea box and converts it into markdown text in a separate box to be viewed. Useful for quick conversion for your .md files!"
          projectUrl="https://codepen.io/Kenford/pen/GPvLGv"
        />
        <CodepenProject
          imgKey="pomodoroClock"
          altTag="pomodoro clock pen thumbnail"
          title="Pomodoro Clock"
          description="Pomodoro clock app developed with React. Allows customization of break and session lengths to fit your needs as you get your work done while taking breaks!"
          projectUrl="https://codepen.io/Kenford/pen/eQrxQB"
        />
      </Slider>
    </div>
  );
};

export default Codepen;
