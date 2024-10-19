import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './allstyle.css'; // Подключаем стили

const JobSeekerRegistration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null); // Add this line
    const [avatarPreview, setAvatarPreview] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async(event) => {
        event.preventDefault();
        console.log("handleSubmit called");
        try {
            const formData = {
                name,
                email,
                password, // Отправляем пароль
            };
            console.log("Submitting form data:", formData);
            // Отправляем данные на сервер
            const response = await axios.post('http://localhost:5000/api/users/register', formData);
            console.log(response);
            // Проверяем ответ от сервера
            if (response.status === 201) {
                alert("Job Seeker registered successfully!");
                navigate('/main'); // Перенаправляем на главную страницу
            }
        } catch (error) {
            if (error.response) {
                console.error("Error registering user:", error.response.data);
                alert(error.response.data.message || "Registration failed");
            } else {
                // Ошибка произошла до получения ответа от сервера
                console.error("Error registering user:", error.message);
                alert("Registration failed: " + error.message);
            }
        }
    };

    const previewImage = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setAvatarPreview(e.target.result);
                setAvatar(file); // Use setAvatar here
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <h2>Register as a Job Seeker</h2>
            <form id="job-seeker-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="jobseeker-name">Full Name:</label>
                    <input
                        type="text"
                        id="jobseeker-name"
                        name="jobseeker-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobseeker-email">Email:</label>
                    <input
                        type="email"
                        id="jobseeker-email"
                        name="jobseeker-email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobseeker-password">Password:</label>
                    <input
                        type="password"
                        id="jobseeker-password"
                        name="jobseeker-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="jobseeker-avatar">Upload Profile Picture:</label>
                    <input
                        type="file"
                        id="jobseeker-avatar"
                        accept="image/*"
                        onChange={previewImage}
                    />
                </div>
                {avatarPreview && (
                    <div className="avatar-preview" style={{ backgroundImage: `url(${avatarPreview})` }}></div>
                )}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default JobSeekerRegistration;
