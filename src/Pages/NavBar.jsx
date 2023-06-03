import React from "react";

const NavBar = () => {
  return (
    <div className="wrapper d-flex flex-column align-items-start justify-content-center">
      <nav className="bg-dark bg-gradient">
        <ul className="ulNav d-flex justify-content-center">
          <li className="li-navBar mt-1">
            \*<a href="#NameText">MARIN DEV</a>*/
          </li>
        </ul>
        <button>
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
        <div className="btn-content">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </nav>
      <section className="nameText text-white align-items-center justify-content-center">
        <h1>Marin Muktić</h1>
        <h2>Frontend Developer</h2>
      </section>
    </div>
  );
};

export default NavBar;
