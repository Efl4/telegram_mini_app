// JobCard.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

const JobCard = ({ companyLogo, title, company, type, salary }) => {
  return (
    <div className="job-card">
      <img src={companyLogo} alt="Company logo" width="50" height="50" />
      <div className="job-details">
        <h3>{title}</h3>
        <p>{company}</p>
        <p>{type}</p>
      </div>
      <div className="job-salary">{salary}</div>
      <FontAwesomeIcon icon={faBookmark} />
    </div>
  );
};

export default JobCard;
