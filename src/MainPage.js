import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Замените на ваш API URL

const MainPage = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token'); // Получаем токен из localStorage
            if (token) {
                try {
                    const response = await axios.get(`${API_URL}/users/me`, {
                        headers: {
                            Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
                        },
                    });
                    setUser(response.data); // Устанавливаем пользователя
                } catch (error) {
                    console.error('Ошибка получения данных пользователя:', error);
                    // Опционально: Вы можете перенаправить на страницу входа, если данные не удалось получить
                    navigate('/login');
                }
            } else {
                navigate('/login'); // Перенаправляем на страницу входа, если токена нет
            }
        };

        fetchUser();
    }, [navigate]);

    return (
        <div className="container">
            {user ? (
                <>
                    <h2>Добро пожаловать, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <button onClick={() => navigate('/vacancies')}>Посмотреть вакансии</button>
                </>
            ) : (
                <h2>Загрузка...</h2>
            )}
        </div>
    );
};

export default MainPage;
