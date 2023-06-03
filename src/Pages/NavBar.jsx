import React from "react";

const NavBar = () => {
  return (
    <div className="wrapper d-flex flex-column align-items-start justify-content-center">
      <nav className="bg-dark bg-gradient">
        <ul>
          <li className="li-navBar">{/* <a href="#"></a> */}</li>
        </ul>
      </nav>
      <section className="nameText text-white align-items-center justify-content-center">
        <h1>Marin Muktić</h1>
        <h2>Frontend Developer</h2>
      </section>
    </div>
  );
};

export default NavBar;
