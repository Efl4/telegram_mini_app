import React from 'react';
import './JobListings.css'; // Подключение стилей

const JobListings = () => {
    const jobs = [
        {
            id: 1,
            title: 'Vacancy 1',
            company: 'Company 1',
            type: 'Full time',
            salary: '₹150k-200k',
            status: 'applied',
            logo: 'https://storage.googleapis.com/a1aa/image/s19swn3TVUaZA55uQqc40A3GhPGmaejXgUljmQzUO6gbhM0JA.jpg'
        },
        {
            id: 2,
            title: 'Vacancy 2',
            company: 'Company 2',
            type: 'Full time',
            salary: '₹150k-200k',
            status: 'rejected',
            logo: 'https://storage.googleapis.com/a1aa/image/s19swn3TVUaZA55uQqc40A3GhPGmaejXgUljmQzUO6gbhM0JA.jpg'
        },
        {
            id: 3,
            title: 'Vacancy 3',
            company: 'Company 3',
            type: 'Full time',
            salary: '₹150k-200k',
            status: '',
            logo: 'https://storage.googleapis.com/a1aa/image/s19swn3TVUaZA55uQqc40A3GhPGmaejXgUljmQzUO6gbhM0JA.jpg'
        },
        {
            id: 4,
            title: 'Vacancy 4',
            company: 'Company 4',
            type: 'Full time',
            salary: '₹150k-200k',
            status: '',
            logo: 'https://storage.googleapis.com/a1aa/image/s19swn3TVUaZA55uQqc40A3GhPGmaejXgUljmQzUO6gbhM0JA.jpg'
        },
    ];

    return (
        <div className="container">
            <div className="header">
                <img
                    src="https://storage.googleapis.com/a1aa/image/0SymNXPAj3bvERnmS44M04YpG4I1w4Ny1U9y7tK1r86sQG6E.jpg"
                    alt="User profile"
                    width="50"
                    height="50"
                />
                <div className="title">40 jobs found</div>
                <div className="filter">filter</div>
            </div>

            <div className="job-list">
                {jobs.map((job) => (
                    <div className="job-item" key={job.id}>
                        <img src={job.logo} alt="Company logo" width="50" height="50" />
                        <div className="job-details">
                            <h3>{job.title}</h3>
                            <p>{job.company}</p>
                            <p>{job.type}</p>
                            <p className="salary">{job.salary}</p>
                        </div>
                        <div className="job-status">
                            {job.status && (
                                <div className={`status ${job.status}`}>
                                    {job.status}
                                </div>
                            )}
                            <i className="fas fa-bookmark bookmark"></i>
                        </div>
                    </div>
                ))}
            </div>

            <div className="footer">
                <a href="#" className="active">
                    <i className="fas fa-home"></i>
                    Home
                </a>
                <a href="#">
                    <i className="fas fa-bookmark"></i>
                    Saved
                </a>
                <a href="#">
                    <i className="fas fa-comment"></i>
                    Message
                </a>
                <a href="#">
                    <i className="fas fa-user"></i>
                    Profile
                </a>
            </div>
        </div>
    );
};

export default JobListings;
