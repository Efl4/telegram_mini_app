const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Импортируем пакет CORS

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

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
