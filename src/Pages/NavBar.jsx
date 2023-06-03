import React, { useState } from "react";

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const toggleContent = () => {
    setVisible(!visible);
  };
  return (
    <div className="wrapper d-flex flex-column align-items-start justify-content-center">
      <nav className="bg-dark bg-gradient">
        <ul className="ulNav d-flex justify-content-center">
          <li className="li-navBar mt-1">
            \*<a href="#NameText">MARIN DEV</a>*/
          </li>
        </ul>
        <button onClick={toggleContent}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-3 h-3"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {visible && (
          <div className="btn-content">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        )}
      </nav>
      <section className="nameText text-white align-items-center justify-content-center">
        <h1>Marin Muktić</h1>
        <h2>Frontend Developer</h2>
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
      </section>
      <div className="arrow position-absolute bottom-0 start-50 translate-middle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 arrow"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
