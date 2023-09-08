import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import ArrowUp from "../../Icons/ArrowUp";

const Footer = () => {
  const [checkSend, setCheckSend] = useState(false);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      sendEmail(e);
    }
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setCheckSend(true);

          setTimeout(() => {
            setCheckSend(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <div className="footer" id="contact">
      <div className="text-center">
        <h2 className="text-white d-inline-block custom-border mt-3 mb-5">
          Contact me
        </h2>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <fieldset className="contact-container">
          <legend>Contact via Email</legend>
          <form action="" onSubmit={sendEmail}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              required
            />

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required />

            <label htmlFor="message">Text:</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              required
            ></textarea>
            {checkSend && (
              <div className="success-message">Email sent successfully!</div>
            )}
            <button className="d-block send" type="submit" onSubmit={handleKeyDown}>
              Send
            </button>
          </form>
        </fieldset>

        <fieldset className="contact-container">
          <legend>Contact information</legend>
          <fieldset>
            <legend>Contact me</legend>
            <a href="mailto:marin.muktic3@gmail.com">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>{" "}
              mmuktic3@gmail.com
            </a>
          </fieldset>
        </fieldset>
      </div>
      <div className="arrow-up-container">
        <a href="#home" aria-label="back to home">
          <div className="arrow-up-wrapper arrow">
            <ArrowUp />
          </div>
        </a>
      </div>
      <div className="credits mt-5">
        <p className="mt-1 mb-0">
          &#169;2023 | Developed by{" "}
          <a href="https://github.com/Marin303">Marin Muktić</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
