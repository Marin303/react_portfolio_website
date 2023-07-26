import React from "react";

const ContactInfo = () => {
  return (
    <div className="ContactContainer">
      <a href="https://www.linkedin.com/in/marin-muktic/">
        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        Linkedin
      </a>
      <a href="https://github.com/Marin303">
        <i className="fa fa-github fa-2x" aria-hidden="true"></i>Github
      </a>
      <a href="mailto:marin.muktic3@gmail.com">
        <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>Email
      </a>
    </div>
  );
};

export default ContactInfo;
