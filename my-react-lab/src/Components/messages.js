import React from 'react';
import "../style/messages.css";
function Messages({ messages }) {
  return (
    <div className="messages-container">
      {Object.entries(messages).map(([key, message]) => (
        <div key={key} className="message-card">
          <p>{message}</p>
        </div>
      ))}
    </div>
  );
}
export default Messages;


