// ChatItem.js
import React from "react";

const ChatItem = ({ profilePic, title, message, badgeCount }) => {
  return (
    <div className="chat-item">
      <img src={profilePic} alt="Company logo" width="50" height="50" />
      <div className="content">
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      {badgeCount > 0 && <div className="badge">{badgeCount}</div>}
    </div>
  );
};

export default ChatItem;
