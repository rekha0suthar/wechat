import React from 'react';
import Chat from './Chat';

const ChatDashboard = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <p>+91 32893980484</p>
        {/* <p>Click here to check info</p> */}
      </div>
      <Chat />
      <div className="input-container">
        {/* <p>+</p> */}
        <input type="text" placeholder="Type a message" />
      </div>
    </div>
  );
};

export default ChatDashboard;
