import React from "react";
import linkSharingImg from "../../Images/link-sharing.webp";

const LinkSharingApp = () => {
  return (
    <section className="projects pb-5 w-300px">
      <img
        className="rounded-top-3 fixedSize object-fit-cover"
        src={linkSharingImg}
        alt="link-sharing"
      />
      <h2 className="text-white">Link sharing</h2>
      <p className="text-white">Link sharing app created with React</p>
      <div className="d-flex flex-wrap">
        <div className="link-project rounded-3">
          <a
            href="https://github.com/Marin303/link-sharing-app-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub - repository
          </a>
        </div>
        <div className="link-project rounded-3">
          <a
            href="https://link-sharing-app-react.netlify.app/"
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

export default LinkSharingApp;
