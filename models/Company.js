// models/Company.js
const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String, // URL or path to the avatar image
        required: false,
    },
    role: {
        type: String,
        default: 'employer',
    },
}, { timestamps: true });

module.exports = mongoose.model('Company', CompanySchema);
