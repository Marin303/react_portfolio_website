import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center">
        <h2 className="text-white pt-5 d-inline-block custom-border mt-5">
          Contact me
        </h2>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <fieldset className="contact-container">
          <legend>Contact information</legend>
          <fieldset>
            <legend>Contact</legend>
          </fieldset>
        </fieldset>
        <fieldset className="contact-container">
          <legend>Contact information</legend>
          <fieldset>
            <legend>Contact</legend>
          </fieldset>
        </fieldset>
      </div>
    </div>
  );
};

export default Footer;
