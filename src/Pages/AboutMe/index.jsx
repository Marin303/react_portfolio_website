import React from "react";
import programmingImage from "../../Images/programming.jpg";
import imageOfMe from "../../Images/me-img.png";
import Skills from "../../Icons/Skills";

const AboutMe = () => {
  return (
    <div className="about-container text-center align-middle pb-5" id="about">
      <h2 className="text-white d-inline-block custom-border mt-3">About Me</h2>
      <div className="about-wrapper">
        <img
          src={programmingImage}
          alt="programming"
          className="rounded-top coverImage"
        />
        <div className="image-container">
          <img
            src={imageOfMe}
            alt="me"
            className="imageOfMe rounded-circle object-fit-cover w-100 h-100"
          />
        </div>
        <div className="textAbout">
          <h3>Marin Muktić</h3>
          <h4>Frontend Developer</h4>
          <p>Passionate about technology</p>
          <p>Constantly seeking new opportunities to enhance my experience.</p>

          <div className="d-flex flex-wrap align-items-center">
            <p className="mb-0">Skills:</p>
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
