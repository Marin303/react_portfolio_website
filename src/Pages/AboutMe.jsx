import React from "react";
import programmingImage from "../Images/programming.jpg";
import imageOfMe from "../Images/me-img.png";

const AboutMe = () => {
  return (
    <div className="about-container text-center align-middle">
      <h2 className="text-white pt-5 d-inline-block custom-border mt-5">About Me</h2>
      <div className="about-wrapper ">
        <img
          src={programmingImage}
          alt="programming"
          className="rounded-top coverImage"
          style={{ objectFit: "cover", width: "100%", maxHeight: "150px" }}
        />
        <div className="image-wrapper">
          <img
            src={imageOfMe}
            alt="me"
            className="imageOfMe rounded-circle"
            style={{
              objectFit: "cover",
              maxWidth: "150px",
              maxHeight: "150px",
            }}
          />
        </div>
        <div className="textAbout">
          <h3>Marin Muktić</h3>
          <h4>Frontend Developer</h4>
          <p>Passionate about technology</p>
          <p>Constantly seeking new opportunities to enhance my experience.</p>
          <div className="d-flex flex-wrap align-items-center">
            <p className="mb-0">Skills:</p>
            <i className="devicon-html5-plain mx-1"> HTML</i>
            <i className="devicon-css3-plain mx-1"> CSS</i>
            <i className="devicon-javascript-plain mx-1"> JS</i>
            <i className="devicon-react-original mx-1"> REACT</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
