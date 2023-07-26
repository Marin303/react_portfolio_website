import React from "react";
import WebChat from "../Projects/WebChat";
import PasswordGen from "../Projects/PasswordGen";
import Ecommerce from "../Projects/Ecommerce";
import WeatherForecast from "../Projects/WeatherForecast";
import IpadressTracker from "../Projects/IpadressTracker";
import CountrySearch from "../Projects/CountrySearch";
import LinkSharingApp from "../Projects/LinkSharingApp";

const FeaturedProjects = () => {
  return (
    <div className="featuredContainer" id="projects">
      <h2 className="text-white d-inline-block custom-border mt-3">
        Featured Projects
      </h2>
      <div className="content">
        <WebChat/>
        <PasswordGen/>
        <Ecommerce/>
        <WeatherForecast />
        <IpadressTracker/>
        <CountrySearch/>
       <LinkSharingApp/>
      </div>
    </div>
  );
};

export default FeaturedProjects;
