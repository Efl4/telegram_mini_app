// SavedJobs.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faBookmark, faHome, faCommentDots, faUser } from "@fortawesome/free-solid-svg-icons";
import JobCard from "./JobCard";
import "./SavedJobs.css";

const SavedJobs = () => {
  const jobs = [
    {
      companyLogo: "https://storage.googleapis.com/a1aa/image/CbkQ1QW6tiIqD1H9pxIfhDfXkIdLX7sAEgrxDmo9DIrnfzQnA.jpg",
      title: "Vacancy",
      company: "Company",
      type: "Full time",
      salary: "₹150k-200k",
    },
    // Добавьте больше объектов вакансий по аналогии
  ];

  return (
    <div className="container">
      <header className="header">
        <img
          src="https://storage.googleapis.com/a1aa/image/VpgEAVOqICJzA12Ms2e6xMkN8lO2fdpfeMtGbPNE9v2hePDdC.jpg"
          alt="User profile"
          width="50"
          height="50"
          className="profile-pic"
        />
        <div className="icons">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faBell} />
        </div>
      </header>

      <div className="title">
        12 jobs saved
        <span className="filter">filter</span>
      </div>

      {/* Генерация списка вакансий */}
      {jobs.map((job, index) => (
        <JobCard key={index} {...job} />
      ))}

      <footer className="footer">
        <a href="#">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </a>
        <a href="#" className="active">
          <FontAwesomeIcon icon={faBookmark} />
          <span>Saved</span>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faCommentDots} />
          <span>Message</span>
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faUser} />
          <span>Profile</span>
        </a>
      </footer>
    </div>
  );
};

export default SavedJobs;
