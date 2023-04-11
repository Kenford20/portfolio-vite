import React, { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Resume from "./components/resume-modal";
import Main from "./components/main-content";
import About from './components/about';
import Skills from './components/skills';
import Portfolio from './components/portfolio';
import Codepen from './components/codepen-slider';
import Contact from './components/contact';
import Footer from './components/footer';
import AOS from "aos";

// global sass style sheet that imports the styles for each component as well
import "./app.scss";

const App = () => {
  const [isNavActive, toggleNavState] = useState(false);
  const [isResumeModalActive, toggleModalState] = useState(false);

  AOS.init({ duration: 1000 });

  return (
    <div className="App">
      <header style={{ zIndex: 0 }}>
        <Navbar
          isActive={isNavActive}
          toggle={() => toggleNavState(!isNavActive)}
        />
        <section id="hero-container">
          <Hero
            isNavActive={isNavActive}
            showResumeModal={() => toggleModalState(true)}
          />
        </section>
        <Resume
          isOpen={isResumeModalActive}
          hideModal={() => toggleModalState(false)}
        />
        <svg
          className="svg-bg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="50 120 670 320"
          style={{ zIndex: -100 }}>
          <path
            d="M 0 50 Q 0 450 400 400 C 700 350 750 450 800 550 L 800 550 L 50 550"
            fill="white"
          />
        </svg>
      </header>

      <main id="main-container">
        <Main isResumeOpen={isResumeModalActive} />
      </main>

      <section id="about-container">
        <About isResumeOpen={isResumeModalActive} />
      </section>

      <section className="skills-container">
        <svg
          className="svg-bg svg-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="50 0 670 220"
          style={{ zIndex: -100 }}>
          <path
            d="M -1 261 Q 99 147 403 142 C 681 147 784 137 799 56 L 800 50 L 0 50"
            fill="rgb(245, 250, 250)"
          />
        </svg>
        <svg
          className="svg-bg svg-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="100 200 700 320"
          style={{ zIndex: -100 }}>
          <path
            d="M 0 550 Q 82 496 334 477 C 796 463 787 384 800 300 L 800 550 L 50 550"
            fill="white"
          />
        </svg>
        <Skills />
      </section>

      <section id="portfolio-container">
        <div className="portfolio-item">
          <Portfolio />
        </div>
      </section>

      <section id="codepen" style={{ zIndex: 100 }}>
        <span>
          <i className="fab fa-codepen"></i>
        </span>
        <h2 className="section-headers"> Codepen Work </h2>
        <Codepen />
      </section>

      <section id="contact-container" style={{ zIndex: 0 }}>
        <svg
          className="svg-bg svg-top"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="50 0 670 220"
          style={{ zIndex: -100 }}>
          <path
            d="M 0 50 Q 0 150 400 100 C 750 50 784 137 800 150 L 800 50 L 0 50"
            fill="rgb(245, 250, 250)"
          />
        </svg>
        <svg
          className="svg-bg svg-bottom"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="80 0 700 550"
          style={{ zIndex: -100 }}>
          <path
            d="M 1 427 Q 170 515 563 437 C 693 420 785 480 800 546 L 800 550 L 0 550"
            fill="white"
          />
        </svg>
        <Contact />
      </section>

      <footer id="footer-container">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
