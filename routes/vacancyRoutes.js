// routes/vacancyRoutes.js
const express = require('express');
const Vacancy = require('../models/Vacancy');
const router = express.Router();

// Добавить вакансию
router.post('/', async (req, res) => {
    const { title, description, company } = req.body;
    try {
        const vacancy = await Vacancy.create({ title, description, company });
        res.status(201).json(vacancy);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});


module.exports = router;
