import React from "react";
import restCountriesImg from "../Images/rest-countries.gif"
const CountrySearch = () => {
  return (
    <section className="projects pb-5">
      <img
        className="rounded-top-3"
        src={restCountriesImg}
        alt="rest-countries"
        style={{ width: "300px", height: "250px" }}
      />
      <h2 className="text-white">Country search</h2>
      <p className="text-white">Rest countries created with React</p>
      <div className="d-flex">
        <div className="link-project rounded-3">
          <a
            href="https://github.com/Marin303/rest-countries-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub - repository
          </a>
        </div>
        <div className="link-project rounded-3">
          <a
            href="https://rest-countries-marin.netlify.app/"
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

export default CountrySearch;
