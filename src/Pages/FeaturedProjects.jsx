import React from "react";
import gifChat from "../Images/chatapp2.gif";
import passGenImg from "../Images/password-generator.png";
import ecommerceImg from "../Images/ecommerce-desktop.png";
import wheaterImg from "../Images/wheater_forecast_desktop.png";
const FeaturedProjects = () => {
  return (
    <div className="featuredContainer" id="projects">
      <h2 className="text-white d-inline-block custom-border mt-5">
        Featured Projects
      </h2>
      <div className="content">
        <section className="projects pb-5">
          <img
            className="rounded-top-3"
            src={gifChat}
            alt="chat-gif"
            style={{ width: "300px", maxHeight: "250px" }}
          />
          <h2 className="text-white">Web Chat App</h2>
          <p className="text-white">Chat created with React</p>
          <div className="d-flex">
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/react_webchat_scaledrone"
                target="_blank"
                rel="noreferrer"
              >
                GitHub - repository
              </a>
            </div>
            <div className="link-project rounded-3">
              <a
                href="https://chat-app-marin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Project - deploy
              </a>
            </div>
          </div>
        </section>
        <section className="projects pb-5">
          <img
            className="rounded-top-3"
            src={passGenImg}
            alt="password-generator"
            style={{ width: "300px", height: "250px" }}
          />
          <h2 className="text-white">Password Generator</h2>
          <p className="text-white">Password generator tool</p>
          <div className="d-flex">
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/react_password_generator"
                target="_blank"
                rel="noreferrer"
              >
                GitHub - repository
              </a>
            </div>
            <div className="link-project rounded-3">
              <a
                href="https://password-generator-marin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Project - deploy
              </a>
            </div>
          </div>
        </section>
        <section className="projects pb-5">
          <img
            className="rounded-top-3"
            src={ecommerceImg}
            alt="password-generator"
            style={{ width: "300px", height: "250px" }}
          />
          <h2 className="text-white">Admin dashboard</h2>
          <p className="text-white">Ecommerce admin dashboard</p>
          <div className="d-flex">
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                GitHub - repository
              </a>
            </div>
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/ecommerce"
                target="_blank"
                rel="noreferrer"
              >
                Project - in progress
              </a>
            </div>
          </div>
        </section>
        <section className="projects pb-5">
          <img
            className="rounded-top-3"
            src={wheaterImg}
            alt="wheater-app"
            style={{ width: "300px", height: "250px" }}
          />
          <h2 className="text-white">Wheater forecast</h2>
          <p className="text-white">Real-time weather forecast app</p>
          <div className="d-flex">
            <div className="link-project rounded-3">
              <a
                href="https://github.com/Marin303/wheater_forecast_react"
                target="_blank"
                rel="noreferrer"
              >
                GitHub - repository
              </a>
            </div>
            <div className="link-project rounded-3">
              <a
                href="https://weather-app-marin.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Project - deploy
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FeaturedProjects;
