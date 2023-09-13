import "./firstPage.scss"
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
      className="wrapper"
      id="home"
    >
      {/* <FloatingCircles /> */}
      <nav className="">

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
      <section className="">
        <aside className="nameText">
          <h1>Marin Muktić</h1>

          <LetterSpelling trigger={trigger} />

          <ContactInfo />
        </aside>
      </section>
    </div>
  );
};

export default FirstPage;
