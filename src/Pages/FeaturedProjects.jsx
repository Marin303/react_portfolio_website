import React, { useState } from "react";
import WebChat from "../Projects/WebChat";
import PasswordGen from "../Projects/PasswordGen";
import Ecommerce from "../Projects/Ecommerce";
import WeatherForecast from "../Projects/WeatherForecast";
import IpadressTracker from "../Projects/IpadressTracker";
import CountrySearch from "../Projects/CountrySearch";
import LinkSharingApp from "../Projects/LinkSharingApp";
import ArrowDownIcon from "../Icons/ArrowDownIcon";

const FeaturedProjects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleShowAll = () => {
    setShowAllProjects(!showAllProjects);
    if (isExpanded) {
      const featuredContainer = document.querySelector(".featuredContainer");
      window.scrollTo({
        top: featuredContainer.offsetTop
      });
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="featuredContainer text-center" id="projects">
      <h2 className="text-white d-inline-block custom-border mt-3">
        Featured Projects
      </h2>
      <div className="content mt-5 d-flex flex-wrap">
        <LinkSharingApp />
        <Ecommerce />
        <CountrySearch />
        {
        showAllProjects && 
        (
          <>
            <WebChat />
            <PasswordGen />
            <WeatherForecast />
            <IpadressTracker />
          </>
        )}
      </div>
      {
      isExpanded ? (
        <p>Click arrow to close expanded projects</p>
      ) : (
        <p>Click arrow to explore all projects</p>
      )}
      <div className="d-flex justify-content-center w-100">
        <button
          className="btn btn-link p-0 border-0 bg-transparent"
          onClick={toggleShowAll}
          style={{
            transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          <ArrowDownIcon />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProjects;
