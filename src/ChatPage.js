// ChatPage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark, faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";
import ChatItem from "./ChatItem";
import "./ChatPage.css";

const ChatPage = () => {
  const chats = [
    {
      profilePic: "https://storage.googleapis.com/a1aa/image/6WYMNVlr7o59Fh51ZhYUlL2c1II8aYzdcJq0zwL0qAnVUG6E.jpg",
      title: "Vacancy",
      message: "Dear Bek Bekhuly, We sincerely thank you for taking the time to apply and meet with our team about the job title or position. We enjoyed learning more about your past achievements as well as your skills and qualifications..",
      badgeCount: 1,
    },
    {
      profilePic: "https://storage.googleapis.com/a1aa/image/6WYMNVlr7o59Fh51ZhYUlL2c1II8aYzdcJq0zwL0qAnVUG6E.jpg",
      title: "Vacancy",
      message: "Dear Bek Bekhuly, We sincerely thank you for taking the time to apply and meet with our team about the job title or position. We enjoyed learning more about your past achievements as well as your skills and qualifications..",
      badgeCount: 3,
    },
    {
      profilePic: "https://storage.googleapis.com/a1aa/image/6WYMNVlr7o59Fh51ZhYUlL2c1II8aYzdcJq0zwL0qAnVUG6E.jpg",
      title: "Vacancy",
      message: "Dear Bek Bekhuly, We sincerely thank you for taking the time to apply and meet with our team about the job title or position. We enjoyed learning more about your past achievements as well as your skills and qualifications..",
      badgeCount: 0,
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://storage.googleapis.com/a1aa/image/Z0swSn3cf7RlUy31UDRrK7VV9CNdxznrOHTpuPcop2zsoM0JA.jpg"
          alt="User profile"
          width="50"
          height="50"
        />
        <h2>2 new chats</h2>
        <div className="filter">filter</div>
      </header>

      <div className="chat-list">
        {chats.map((chat, index) => (
          <ChatItem key={index} {...chat} />
        ))}
      </div>

      <footer className="footer">
        <div className="icon">
          <FontAwesomeIcon icon={faHome} />
          <p>Home</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faBookmark} />
          <p>Saved</p>
        </div>
        <div className="icon active">
          <FontAwesomeIcon icon={faCommentDots} />
          <p>Message</p>
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faUser} />
          <p>Profile</p>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
