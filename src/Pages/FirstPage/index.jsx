import React, { useEffect, useRef, useState, useCallback } from "react";
import LetterSpelling from "../../Components/LetterSpelling";
import OpenSideIcon from "../../Icons/OpenSide";
import ArrowDownIcon from "../../Icons/ArrowDown";
import NavigationMenu from "../../Shared/NavigationMenu";
import ContactInfo from "../../Shared/ContactInfo";
import FloatingCircles from "../../Components/FloatingCircles";

const FirstPage = () => {
  const btnContentRef = useRef(null);
  const [trigger, setTrigger] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const handleContentVisibility = useCallback(() => {
    setIsVisible((prev) => !prev);

    if (!isVisible) {
      setIsMounted(true);
    }
  }, [isVisible]);

  useEffect(() => {
    const isClosing = !isVisible && isMounted;

    if (isClosing) {
      const timer = setTimeout(() => setIsMounted(false), 900);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isMounted]);

  const handleLetterSpellingClick = () => {
    setTrigger((prevTrigger) => !prevTrigger);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const isClickOutside =
        btnContentRef.current && !btnContentRef.current.contains(e.target);

      if (isClickOutside) {
        handleContentVisibility();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleContentVisibility]);

  return (
    <div
      className="wrapper d-flex flex-column justify-content-center m-0 position-relative overflow-hidden"
      id="home"
    >
      <FloatingCircles />
      <nav className="d-flex justify-content-center">

        <button onClick={handleContentVisibility} aria-label="openSideBar">
          {isVisible ? (
            <i className="fa-solid fa-xmark fa-xl"></i>
          ) : (
            <OpenSideIcon />
          )}
        </button>

        {isMounted && (
          <NavigationMenu ref={btnContentRef} isVisible={isVisible} />
        )}
      </nav>
      <section className="repon d-flex justify-content-between flex-wrap mt-5">
        <aside className="nameText text-white p-4">
          <h1>Marin Muktić</h1>

          <LetterSpelling trigger={trigger} />

          <ContactInfo />
        </aside>
      </section>
      <div className="arrow-animation position-absolute bottom-0 start-50 mb-5">
        <a href="#about" aria-label="Read more about me">
          <ArrowDownIcon />
        </a>
      </div>
    </div>
  );
};

export default FirstPage;
