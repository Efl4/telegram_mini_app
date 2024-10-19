const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const companyRoutes = require('./routes/companyRoutes'); // Убедитесь, что этот импорт существует
const vacancyRoutes = require('./routes/vacancyRoutes'); // Убедитесь, что этот импорт существует
const cors = require('cors'); // Импортируем пакет CORS
const path = require('path'); // Импортируем модуль path

dotenv.config();
connectDB();

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000', // Указываем домен, откуда разрешаем запросы
    methods: ['GET', 'POST'], // Указываем методы, которые разрешаем
    credentials: true, // Разрешаем передавать куки, если это нужно
};

app.use(cors(corsOptions)); // Применяем настройки CORS
app.use(express.json());

// Serve static files for avatar uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/vacancies', vacancyRoutes); // Убедитесь, что у вас есть файл vacancyRoutes.js

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
