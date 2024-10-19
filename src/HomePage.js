import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // Подключаем стили

const HomePage = () => {
  const navigate = useNavigate();

  const handleCompanyClick = () => {
    navigate('/company-registration'); // Переход на страницу регистрации компании
  };

  const handleJobSeekerClick = () => {
    navigate('/jobseeker-registration'); // Переход на страницу регистрации соискателя
  };

  return (
    <div className="container">
      <div className="logo">
        <img src="static/bob.png" alt="HR Mini App Logo" className="logo-img" />
        <h1 className="app-title">HR Mini App</h1>
        <p className="app-subtitle">Find a Job</p>
      </div>
      <div className="buttons">
        <button className="btn" onClick={handleCompanyClick}>
          Start as a company
        </button>
        <button className="btn" onClick={handleJobSeekerClick}>
          Start as a job seeker
        </button>
      </div>
    </div>
  );
};

export default HomePage;
