// models/Vacancy.js
const mongoose = require('mongoose');

const VacancySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    company: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Vacancy', VacancySchema);
