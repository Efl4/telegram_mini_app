// ProfilePage.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faBookmark, faComment, faUser, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./ProfilePage.css";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="profile-header">
        <img
          src="https://storage.googleapis.com/a1aa/image/je0maVgVsfrTMkfEliUGsYeMXo8LLnptf38rGOkfVf8F5oM0JA.jpg"
          alt="Profile picture of a person with short hair and glasses"
          width="60"
          height="60"
        />
        <div className="profile-info">
          <h2>Bek Bekhuly</h2>
          <p>View profile</p>
        </div>
        <div className="profile-progress">67%</div>
      </div>

      <MenuItem title="job seeking status" />
      <MenuItem title="personal information" />
      <MenuItem title="application status" notification={1} />
      <MenuItem title="security" />
      <MenuItem title="language" />
      <MenuItem title="help center" />
      <MenuItem title="invite friends" />

      <Footer />
    </div>
  );
};

const MenuItem = ({ title, notification }) => (
  <a className="menu-item" href="#">
    {title}
    <div>
      <FontAwesomeIcon icon={faChevronRight} />
      {notification && <span className="notification">{notification}</span>}
    </div>
  </a>
);

const Footer = () => (
  <div className="footer">
    <a href="#">
      <FontAwesomeIcon icon={faHome} />
      Home
    </a>
    <a href="#">
      <FontAwesomeIcon icon={faBookmark} />
      Saved
    </a>
    <a href="#">
      <FontAwesomeIcon icon={faComment} />
      Message
    </a>
    <a className="active" href="#">
      <FontAwesomeIcon icon={faUser} />
      Profile
    </a>
  </div>
);

export default ProfilePage;
