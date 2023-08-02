import React from "react";

const NavigationMenu  = React.forwardRef(( {isVisible}, btnContentRef) => {
  const menuClass = isVisible ? "btn-content open" : "btn-content close"
  return (
    <div className={`${menuClass} btn-content bg-dark bg-gradient`} ref={btnContentRef}>
      <ul>
        <li>
          <a href="#home">
            <i className="fa-solid fa-house"></i>Home
          </a>
        </li>
        <li>
          <a href="#about">
            <i className="fa-solid fa-gear"></i>About
          </a>
        </li>
        <li>
          <a href="#projects">
            <i className="fa-solid fa-circle-info"></i>Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="fa-solid fa-envelope"></i>Contact
          </a>
        </li>
      </ul>
    </div>
  );
});

export default NavigationMenu;
