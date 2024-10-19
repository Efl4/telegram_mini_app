import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VacanciesPage = () => {
    const [vacancies, setVacancies] = useState([]);

    useEffect(() => {
        const fetchVacancies = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vacancies');
                setVacancies(response.data);
            } catch (error) {
                console.error("Error fetching vacancies:", error);
            }
        };

        fetchVacancies();
    }, []);

    return (
        <div className="container">
            <h2>Job Vacancies</h2>
            <ul>
                {vacancies.map((vacancy) => (
                    <li key={vacancy._id}>
                        <h3>{vacancy.title}</h3>
                        <p>{vacancy.description}</p>
                        <p>Company: {vacancy.company}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default VacanciesPage;