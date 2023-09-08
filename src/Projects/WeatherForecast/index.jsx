import React from "react";
import wheaterImg from "../../Images/wheater-desktop.png";
const WeatherForecast = () => {
  return (
    <section className="projects pb-5 w-300px">
      <img
        className="rounded-top-3 fixedSize"
        src={wheaterImg}
        alt="wheater-app"
      />
      <h2 className="text-white">Wheater forecast</h2>
      <p className="text-white">Real-time weather forecast app</p>
      <div className="d-flex flex-wrap">
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
