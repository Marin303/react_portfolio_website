import React from "react";
import wheaterImg from "../Images/wheater-desktop.gif";
const WeatherForecast = () => {
  return (
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
  );
};

export default WeatherForecast;
