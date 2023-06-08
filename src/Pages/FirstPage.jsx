import React, { useEffect, useRef, useState } from "react";
import LetterSpelling from "../Components/LetterSpelling";

const FirstPage = () => {
  const [visibleContent, setVisibleContent] = useState(false);
  const [toggleBtnVisible, setToggleBtnVisible] = useState(true);
  const [closeBtnVisible, setCloseBtnVisible] = useState(false);
  const btnContentRef = useRef(null);
  const [trigger, setTrigger] = useState(false);

  const toggleContent = () => {
    setVisibleContent(true);
    setToggleBtnVisible(false);
    setCloseBtnVisible(true);
  };

  const btnDisappear = () => {
    setVisibleContent(false);
    setToggleBtnVisible(true);
    setCloseBtnVisible(false);
  };

  const handleLetterSpellingClick = () => {
    setTrigger((prevTrigger) => !prevTrigger);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnContentRef.current && !btnContentRef.current.contains(e.target)) {
        setVisibleContent(false);
        setToggleBtnVisible(true);
        setCloseBtnVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="wrapper d-flex flex-column align-items-start justify-content-center"
      id="home"
    >
      <nav className="bg-dark bg-gradient">
        <ul className="ulNav d-flex justify-content-center">
          <li className="li-navBar mt-1">
            &lt;&gt;
            <a href="/" onClick={handleLetterSpellingClick}>
              MARIN DEV
            </a>
            &lt;/&gt;
          </li>
        </ul>

        {toggleBtnVisible && (
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
        )}

        {closeBtnVisible && (
          <button onClick={btnDisappear}>
            <i className="fa-solid fa-xmark fa-xl"></i>
          </button>
        )}

        {visibleContent && (
          <div className="btn-content bg-dark bg-gradient" ref={btnContentRef}>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <section className="nameText text-white align-items-center justify-content-center">
        <h1>Marin Muktić</h1>
        <LetterSpelling trigger={trigger} />
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
        <a href="#about">
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
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
