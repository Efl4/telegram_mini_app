const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

// Токен, который ты получил от @BotFather
const token = '7682279228:AAHPOAVkTC2gDAt1nBjoePbLKR8H_NW3PmY';
const bot = new TelegramBot(token, { polling: true });

// Ваша база данных и API
const API_URL = 'http://localhost:5000/api';

// Хранение токенов пользователей
const userTokens = {};

// Создание клавиатуры для незарегистрированных пользователей
const mainMenuKeyboard = {
    reply_markup: {
        keyboard: [
            [{ text: 'Вход' }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    }
};

// Создание клавиатуры для зарегистрированных пользователей
const userMenuKeyboard = {
    reply_markup: {
        keyboard: [
            [{ text: 'Получить вакансии' }]
        ],
        resize_keyboard: true,
        one_time_keyboard: true
    }
};

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Добро пожаловать! Выберите опцию:', mainMenuKeyboard);
});

// Обработка нажатия кнопки "Вход"
bot.onText(/Вход/, async (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Введите ваш email:');

    bot.once('message', async (emailResponse) => {
        const email = emailResponse.text;
        bot.sendMessage(chatId, 'Введите ваш пароль:');

        bot.once('message', async (passwordResponse) => {
            const password = passwordResponse.text;

            try {
                const response = await axios.post(`${API_URL}/users/login`, { email, password });
                const token = response.data.token;
                const name = response.data.name;

                userTokens[chatId] = token; 
                bot.sendMessage(chatId, `Вы успешно вошли в систему, ${name}!`, {
                    reply_markup: userMenuKeyboard.reply_markup
                });
            } catch (error) {
                bot.sendMessage(chatId, 'Ошибка входа: ' + (error.response?.data?.message || 'Неизвестная ошибка'));
            }
        });
    });
});

// Обработка нажатия кнопки "Получить вакансии"
bot.onText(/Получить вакансии/, async (msg) => {
    const chatId = msg.chat.id;
    const token = userTokens[chatId];

    if (!token) {
        return bot.sendMessage(chatId, 'Вы не авторизованы. Пожалуйста, войдите с помощью команды /login.');
    }

    try {
        const response = await axios.get(`${API_URL}/jobs`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const jobs = response.data;

        if (jobs.length === 0) {
            return bot.sendMessage(chatId, 'На данный момент вакансий нет.');
        }

        // Создаем кнопки для каждой вакансии
        const jobButtons = jobs.map(job => {
            return [
                {
                    text: job.title,
                    url: `https://your-mini-app.com/jobs/${job._id}` 
                }
            ];
        });

        // Отправляем сообщение с кнопками
        bot.sendMessage(chatId, 'Доступные вакансии:', {
            reply_markup: {
                inline_keyboard: jobButtons
            }
        });
    } catch (error) {
        bot.sendMessage(chatId, 'Ошибка получения вакансий: ' + (error.response?.data?.message || 'Неизвестная ошибка'));
    }
});

// Запуск бота
bot.on('polling_error', (error) => {
    console.error(error);
});
