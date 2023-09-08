import React from "react";
import gifChat from "../../Images/chatapp.gif";

const WebChat = () => {
  return (
    <section className="projects pb-5 w-300px">
      <img
        className="rounded-top-3 fixedSize"
        src={gifChat}
        alt="chat-gif"
      />
      <h2 className="text-white">Web Chat App</h2>
      <p className="text-white">Chat created with React</p>
      <div className="d-flex flex-wrap">
        <div className="link-project rounded-3">
          <a
            href="https://github.com/Marin303/react_webchat_scaledrone"
            target="_blank"
            rel="noreferrer"
          >
            GitHub - repository
          </a>
        </div>
        <div className="link-project rounded-3">
          <a
            href="https://chat-app-marin.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Project - deploy
          </a>
        </div>
      </div>
    </section>
  );
};

export default WebChat;
