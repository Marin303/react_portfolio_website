import React from "react";
import gifChat from "../Images/chatapp2.gif";
const FeaturedProjects = () => {
  return (
    <div className="featuredContainer">
      <div className="content">
      <h2 className="text-white pt-5 d-inline-block custom-border mt-5">Featured Projects</h2>
      <section className="projects">
        <img 
        className="rounded-top"
        src={gifChat} 
        alt="chat-gif"
        style={{ width: "100%", maxHeight: "250px" }}/>
      <h2 className="text-white">Web Chat App</h2>
      <p className="text-white">Chat created with React</p>
      </section>
      </div>
    </div>
  );
};

export default FeaturedProjects;
