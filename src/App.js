import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import CompanyRegistration from './components/CompanyRegistration';
import JobSeekerRegistration from './components/JobSeekerRegistration';
import MainPage from './components/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/jobseeker-registration" element={<JobSeekerRegistration />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
