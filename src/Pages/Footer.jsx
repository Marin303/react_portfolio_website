import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-center">
        <h2 className="text-white pt-5 d-inline-block custom-border mt-5">
          Contact me
        </h2>
      </div>
      <div className="d-flex justify-content-center flex-wrap">
        <fieldset className="contact-container">
          <legend>Contact via Email</legend>
          <form action="mailto:mmuktic3@gmail.com" method="get">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required/>

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="example@email.com" required/>

            <label htmlFor="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required/>

            <label htmlFor="text">Text:</label>
            <textarea name="text" id="text" cols="30" rows="10" required></textarea>
            <button className="d-block send" type="submit">Send</button>
          </form>
        </fieldset>

        <fieldset className="contact-container">
          <legend>Contact information</legend>
          <fieldset>
            <legend>Contact</legend>
          </fieldset>
        </fieldset>
      </div>
    </div>
  );
};

export default Footer;
