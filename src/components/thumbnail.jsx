import React, { useState } from "react";
import { PropTypes } from "prop-types";

export const Thumbnail = ({
  animation,
  animationDelay,
  altTag,
  altTagMobile,
  path,
  pathMobile,
  btnPosition,
  siteUrl,
}) => {
  const [isBtnActive, toggleBtnState] = useState(false);

  const imgPaths = {
    cajewelers: new URL("../assets/portfolio/cajewelers.png", import.meta.url).href,
    cajewelersM: new URL("../assets/portfolio/cajewelers-mobile.png", import.meta.url).href,
    codenames: new URL("../assets/portfolio/codenames-board.png", import.meta.url).href,
    codenamesM: new URL("../assets/portfolio/codenames-mobile2.png", import.meta.url).href,
    typingWebsite: new URL("../assets/portfolio/typing-website.png", import.meta.url).href,
    typingWebsiteM: new URL("../assets/portfolio/typing-website-mobile.png", import.meta.url).href,
    kaori: new URL("../assets/portfolio/kaori.png", import.meta.url).href,
    kaoriM: new URL("../assets/portfolio/kaori-mobile.png", import.meta.url).href,
    epic7: new URL("../assets/portfolio/epic7.png", import.meta.url).href,
    epic7M: new URL("../assets/portfolio/epic7-mobile.png", import.meta.url).href,
  };

  return (
    <a href={siteUrl} target="_blank" rel="noopener noreferrer">
      {isBtnActive && (
        <button
          id="site-btn"
          onMouseEnter={() => toggleBtnState(true)}
          style={{ right: btnPosition }}
          data-testid="view-website-btn">
          Visit Site
        </button>
      )}
      <div
        id="thumbnail-laptop"
        data-testid="thumbnail"
        data-aos={animation}
        data-aos-delay={animationDelay}
        onMouseOver={() => toggleBtnState(true)}
        onMouseLeave={() => toggleBtnState(false)}>
        <div id="screen">
          <span id="camera"></span>
          <div id="tool-bar">
            <span className="toolbar-btns"></span>
            <span className="toolbar-btns"></span>
            <span className="toolbar-btns"></span>
            <div id="address-bar"></div>
          </div>
          <div id="portfolio-img">
            <img alt={altTag} src={imgPaths[path]} />
          </div>
        </div>
        <div id="keyboard">
          <div id="keys"></div>
        </div>
        <div id="keyboard-base"></div>

        <div id="thumbnail-mobile">
          <div id="mobile-top">
            <span id="camera"></span>
            <span id="speaker"></span>
          </div>
          <div id="portfolio-img-mobile">
            <img alt={altTagMobile} src={imgPaths[pathMobile]} />
          </div>
          <div id="mobile-bottom">
            <span id="home-btn"></span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Thumbnail;

Thumbnail.propTypes = {
  animation: PropTypes.string.isRequired,
  animationDelay: PropTypes.number.isRequired,
  altTag: PropTypes.string.isRequired,
  altTagMobile: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  pathMobile: PropTypes.string.isRequired,
  btnPosition: PropTypes.string,
  siteUrl: PropTypes.string.isRequired,
};
