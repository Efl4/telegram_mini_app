const Vacancy = require('../models/Vacancy');

const createVacancy = async (req, res) => {
    const { title, description, company } = req.body; // Предполагая, что вы ожидаете эти поля

    try {
        const vacancy = new Vacancy({
            title,
            description,
            company,
        });

        await vacancy.save();
        res.status(201).json(vacancy);
    } catch (error) {
        console.error('Error creating vacancy:', error);
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createVacancy };