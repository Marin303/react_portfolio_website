import React from "react";
import ipTrackerImg from "../Images/ip-desktop.gif"

const IpadressTracker = () => {
  return (
    <section className="projects pb-5">
      <img
        className="rounded-top-3"
        src={ipTrackerImg}
        alt="ip-tracker"
        style={{ width: "300px", height: "250px" }}
      />
      <h2 className="text-white">IP address tracker</h2>
      <p className="text-white">Tracker created with JavaScript</p>
      <div className="d-flex">
        <div className="link-project rounded-3">
          <a
            href="https://github.com/Marin303/ip_adress_tracker_javascript"
            target="_blank"
            rel="noreferrer"
          >
            GitHub - repository
          </a>
        </div>
        <div className="link-project rounded-3">
          <a
            href="https://ip-address-tracker-marin.netlify.app/"
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

export default IpadressTracker;
