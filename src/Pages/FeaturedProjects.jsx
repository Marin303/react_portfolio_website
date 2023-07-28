import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import WebChat from "../Projects/WebChat";
import PasswordGen from "../Projects/PasswordGen";
import Ecommerce from "../Projects/Ecommerce";
import WeatherForecast from "../Projects/WeatherForecast";
import IpadressTracker from "../Projects/IpadressTracker";
import CountrySearch from "../Projects/CountrySearch";
import LinkSharingApp from "../Projects/LinkSharingApp";


const FeaturedProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  

  return (
    <div className="featuredContainer bg-dark" id="projects">
      <h2 className="text-white d-inline-block custom-border mt-3">
        Featured Projects
      </h2>
      <div className="content mt-5">
        <Slider {...settings}>
          <WebChat/>
          <PasswordGen/>
          <Ecommerce/>
          <WeatherForecast/>
          <IpadressTracker/>
          <CountrySearch/>
          <LinkSharingApp/>
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedProjects;
