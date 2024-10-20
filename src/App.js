// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import CompanyRegistration from './CompanyRegistration';
import JobSeekerRegistration from './JobSeekerRegistration';
import MainPage from './MainPage';
import VacanciesPage from './VacanciesPage';
import AddVacancy from './AddVacancy';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/jobseeker-registration" element={<JobSeekerRegistration />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/AddVacancy" element={<AddVacancy/>}/>
      </Routes>
    </Router>
  );
}

export default App;
