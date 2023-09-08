import React from "react";
import passGenImg from "../../Images/password-generator.png";
const PasswordGen = () => {
  return (
    <section className="projects pb-5 w-300px">
      <img
        className="rounded-top-3 fixedSize"
        src={passGenImg}
        alt="password-generator"
      />
      <h2 className="text-white">Password Generator</h2>
      <p className="text-white">Password generator tool</p>
      <div className="d-flex flex-wrap">
        <div className="link-project rounded-3">
          <a
            href="https://github.com/Marin303/react_password_generator"
            target="_blank"
            rel="noreferrer"
          >
            GitHub - repository
          </a>
        </div>
        <div className="link-project rounded-3">
          <a
            href="https://password-generator-marin.netlify.app/"
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

export default PasswordGen;
