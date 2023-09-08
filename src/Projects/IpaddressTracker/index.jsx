import React from "react";
import ipTrackerImg from "../../Images/ip-desktop.gif"

const IpaddressTracker = () => {
  return (
    <section className="projects pb-5 w-300px">
      <img
        className="rounded-top-3 fixedSize"
        src={ipTrackerImg}
        alt="ip-tracker"
      />
      <h2 className="text-white">IP address tracker</h2>
      <p className="text-white">Tracker created with JavaScript</p>
      <div className="d-flex flex-wrap">
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

export default IpaddressTracker;
