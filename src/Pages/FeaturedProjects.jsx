import React from "react";
import gifChat from "../Images/chatapp2.gif";
const FeaturedProjects = () => {
  return (
    <div className="featuredContainer" id="projects">
      <h2 className="text-white d-inline-block custom-border mt-5">
        Featured Projects
      </h2>
      <div className="content">
        <section className="projects">
          <img
            className="rounded-top-3"
            src={gifChat}
            alt="chat-gif"
            style={{ width: "300px", maxHeight: "250px" }}
          />
          <h2 className="text-white">Web Chat App</h2>
          <p className="text-white">Chat created with React</p>
        </section>
        <section className="projects">
          <img
            className="rounded-top-3"
            src="https://dummyimage.com/300x300/777777/ffffff.png"
            alt="300x300"
            style={{ width: "300px", maxHeight: "250px" }}
          />
          <h2 className="text-white">Placeholder</h2>
          <p className="text-white">Second Project</p>
        </section>
      </div>
    </div>
  );
};

export default FeaturedProjects;
