import React from "react";
import Thumbnail from "./thumbnail";

const Portfolio = () => {
  return (
    <div id="portfolio-container">
      <div id="portfolio-header">
        <span>
          <i className="fab fa-html5"></i>
        </span>
        <h2 className="section-headers"> My Best Work </h2>
      </div>

      <div className="portfolio-item-wrapper">
        <div className="portfolio-item-info" data-aos="fade-left">
          <h1 className="portfolio-item-title"> Epic7 Catalyst Tool </h1>
          <h2 className="portfolio-item-type"> Web Application </h2>
          <hr />
          <p className="portfolio-item-description">
            To solve an issue I often came across while playing the mobile
            gacha-game, Epic 7, I developed this web application to present
            lists of data in an organized, table-like format that pertained to a
            particular subsets of other data from the game. For example, if a
            player needed to find out the materials needed to upgrade their
            in-game characters, this application allows them to do so in a very
            simple, easy manner. The application is developed with Angular and
            Typescript.
            <br />
            <br />
            You may view the source code&nbsp;
            <a href="https://github.com/Kenford20/epic7-catalyst-tool">here.</a>
          </p>
          <span className="portfolio-item-tech"> Typescript </span>
          <span className="portfolio-item-tech"> Angular </span>
          <span className="portfolio-item-tech"> Epic7 </span>
        </div>
        <Thumbnail
          altTag="Epic7 Site Thumbnail"
          altTagMobile="Epic7 Site Mobile View Thumbnail"
          path="epic7"
          pathMobile="epic7M"
          animation="fade-left"
          animationDelay={1000}
          siteUrl="https://epic7-catalyst-tool.herokuapp.com/"
        />
      </div>

      <div className="portfolio-item-wrapper">
        <Thumbnail
          altTag="Kaori-chan Thumbnail"
          altTagMobile="Kaori-chan Mobile View Thumbnail"
          path="kaori"
          pathMobile="kaoriM"
          animation="fade-right"
          animationDelay={1000}
          btnPosition="850px"
          siteUrl="https://github.com/Kenford20/my-telegram-bot"
        />
        <div className="portfolio-item-info" data-aos="fade-right">
          <h1 className="portfolio-item-title"> Kaori-chan Bot </h1>
          <h2 className="portfolio-item-type"> Chat Bot Application </h2>
          <hr />
          <p className="portfolio-item-description">
            Kaori-chan is my custom chat bot made for the Telegram Messenger
            application. She is capable of handling a numerous amount of useful
            commands like providing local weather/weekly forecast, math
            calculations, reminders, tagging your friends, and much much more!
            She is built mainly with JavaScript and Node. A basic web server
            hosted on Heroku holds all her logic and allows users to
            continuously send requests to her during the majority of the day.
            <br />
            <br />
            To learn more about Kaori-chan or see a more comprehensive list of
            her commands, please visit&nbsp;
            <a href="https://github.com/Kenford20/my-telegram-bot">here.</a>
          </p>
          <span className="portfolio-item-tech"> JavaScript </span>
          <span className="portfolio-item-tech"> Node </span>
          <span className="portfolio-item-tech"> Telegram </span>
        </div>
      </div>

      <div className="portfolio-item-wrapper">
        <div className="portfolio-item-info" data-aos="fade-right">
          <h1 className="portfolio-item-title"> C.A. Jewelers Inc. </h1>
          <h2 className="portfolio-item-type"> E-commerce Website </h2>
          <hr />
          <p className="portfolio-item-description">
            For a local, family-owned jewelry business, I produced an eCommerce
            website completely from scratch. Being a full stack application,
            React and Redux were used to create the front end layout and user
            interface for multiple pages with routing capabilities. The website
            uses Node and Express on the server side and connects with a Mongo
            database for importing dynamic content to the catalogs and products
            pages via custom APIs.
          </p>
          <span className="portfolio-item-tech"> MongoDB </span>
          <span className="portfolio-item-tech"> Node </span>
          <span className="portfolio-item-tech"> Express </span>
          <span className="portfolio-item-tech"> React </span>
          <span className="portfolio-item-tech"> Redux </span>
        </div>
        <Thumbnail
          altTag="Cajewelers Thumbnail"
          altTagMobile="Cajewelers Mobile View Thumbnail"
          path="cajewelers"
          pathMobile="cajewelersM"
          animation="fade-left"
          animationDelay={1000}
          siteUrl="https://cajewelers.herokuapp.com/"
        />
      </div>

      <div className="portfolio-item-wrapper">
        <Thumbnail
          altTag="Codenames Thumbnail"
          altTagMobile="Codenames Mobile View Thumbnail"
          path="codenames"
          pathMobile="codenamesM"
          animation="fade-right"
          animationDelay={1000}
          btnPosition="850px"
          siteUrl="http://weebcodenames.online"
        />
        <div className="portfolio-item-info" data-aos="fade-left">
          <h1 className="portfolio-item-title"> Kodo Namaewaz </h1>
          <h2 className="portfolio-item-type"> Web Application </h2>
          <hr />
          <p className="portfolio-item-description">
            Kodo Namaewaz is my own custom made, web version of the table top,
            card game, Codenames. The application allows for online game play
            across multiple devices with your family and friends! With the help
            of Node, Express, and Socket.io on the backend, the multiplayer
            aspect of this application was made possible. On a turn by turn
            basis, the game plays just like the regular version with just some
            clicks. It is mobile responsive, so grab your phones and friends and
            play now!
            <br />
            <br /> Interested and want to learn how to play? Click{" "}
            <a
              href="https://github.com/Kenford20/Kodo-Namaewas-Heroku/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer">
              here.
            </a>
          </p>
          <span className="portfolio-item-tech"> HTML </span>
          <span className="portfolio-item-tech"> Javascript </span>
          <span className="portfolio-item-tech"> Node </span>
          <span className="portfolio-item-tech"> SocketIO </span>
        </div>
      </div>

      <div className="portfolio-item-wrapper">
        <div className="portfolio-item-info" data-aos="fade-right">
          <h1 className="portfolio-item-title"> Speed Typing Test </h1>
          <h2 className="portfolio-item-type"> Web Application </h2>
          <hr />
          <p className="portfolio-item-description">
            This speed typing website is one of my first projects that I
            tackled. It is made using only vanilla HTML, CSS, and JavaScript.
            Being strictly a frontend application, it features a very simple
            layout that allows users to attempt a test for typing speed on
            multiple different texts pulled from various public APIs. Features
            includes a simple timer, words per minute and characters per minute
            results, and dynamically styled text used as indication for the
            current status of the user's typing accuracy.
            <br />
            <br /> View source code{" "}
            <a
              href="https://github.com/Kenford20/Kenford20.github.io/blob/master/README.md"
              target="_blank"
              rel="noopener noreferrer">
              here.
            </a>
          </p>
          <span className="portfolio-item-tech"> HTML </span>
          <span className="portfolio-item-tech"> Javascript </span>
          <span className="portfolio-item-tech"> CSS </span>
        </div>
        <Thumbnail
          altTag="Typing Website Thumbnail"
          altTagMobile="Typing Website Mobile View Thumbnail"
          path="typingWebsite"
          pathMobile="typingWebsiteM"
          animation="fade-left"
          animationDelay={1000}
          siteUrl="https://kenford20.github.io/"
        />
      </div>
    </div>
  );
};

export default Portfolio;
