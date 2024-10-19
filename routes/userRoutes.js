const express = require('express');
const { registerUser, loginUser } = require('../controllers/userController');
const router = express.Router();

// Регистрация пользователя
router.post('/register', registerUser);

// Логин пользователя
router.post('/login', loginUser);

module.exports = router;