import React from "react";
import linkSharingImg from "../Images/link-sharing.png";

const LinkSharingApp = () => {
  return (
    <section className="projects pb-5">
      <img
        className="rounded-top-3 object-fit-cover"
        src={linkSharingImg}
        alt="link-sharing"
        style={{ width: "300px", height: "250px" }}
      />
      <h2 className="text-white">Link sharing</h2>
      <p className="text-white">Link sharing app created with React</p>
      <div className="d-flex">
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
            href="https://github.com/Marin303/link-sharing-app-react"
            target="_blank"
            rel="noreferrer"
          >
            Project - in progress
          </a>
        </div>
      </div>
    </section>
  );
};

export default LinkSharingApp;
