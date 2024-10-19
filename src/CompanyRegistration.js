import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './allstyle.css'; // Подключаем стили

const CompanyRegistration = () => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('');

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Company registered successfully!');
    navigate('/main'); // Переход на основную страницу после регистрации
  };

  return (
    <div className="container">
      <h2>Register your company</h2>
      <form id="company-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="company-name">Company Name:</label>
          <input type="text" id="company-name" name="company-name" required />
        </div>
        <div className="form-group">
          <label htmlFor="company-email">Company Email:</label>
          <input type="email" id="company-email" name="company-email" required />
        </div>
        <div className="form-group">
          <label htmlFor="company-avatar">Upload Logo:</label>
          <input type="file" id="company-avatar" accept="image/*" onChange={handleImageUpload} />
        </div>
        {avatar && <div className="avatar-preview" style={{ backgroundImage: `url(${avatar})` }} />}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default CompanyRegistration;
