import React from "react";
import { Link } from "react-router-dom";

import WebChat from "../Projects/WebChat";
import PasswordGen from "../Projects/PasswordGen";
import Ecommerce from "../Projects/Ecommerce";
import WeatherForecast from "../Projects/WeatherForecast";
import IpadressTracker from "../Projects/IpadressTracker";
import CountrySearch from "../Projects/CountrySearch";
import LinkSharingApp from "../Projects/LinkSharingApp";

const Projects = () => {
  return (
    <div className="text-center">
      <h2 className="text-white custom-border">
        All Project's
     </h2>
      <Link to="/">
        <button className="btn btn-primary d-flex m-2">Back</button>
      </Link>
      <div className="d-flex flex-wrap">
        <LinkSharingApp />
        <Ecommerce />
        <CountrySearch />
        <WebChat />
        <PasswordGen />
        <WeatherForecast />
        <IpadressTracker />
      </div>
    </div>
  );
};

export default Projects;
