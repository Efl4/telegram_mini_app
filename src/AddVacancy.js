import React, { useState } from 'react';
import axios from 'axios';

const AddVacancy = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [company, setCompany] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = { title, description, company };
            const response = await axios.post('http://localhost:5000/api/vacancies', formData);
            if (response.status === 201) {
                alert("Vacancy added successfully!");
            }
        } catch (error) {
            console.error("Error adding vacancy:", error);
        }
    };

    return (
        <div className="container">
            <h2>Add a New Vacancy</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    required
                />
                <button type="submit">Add Vacancy</button>
            </form>
        </div>
    );
};

export default AddVacancy;