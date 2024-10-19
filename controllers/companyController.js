// controllers/CompanyController.js
const Company = require('../models/Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

// Register a company
const registerCompany = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // Check if company already exists
        const companyExists = await Company.findOne({ email });

        if (companyExists) {
            return res.status(400).json({ message: 'Company already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Handle avatar upload
        let avatarPath = '';
        if (req.file) {
            avatarPath = req.file.path; // Path to the uploaded file
        }

        // Create the company
        const company = await Company.create({
            name,
            email,
            password: hashedPassword,
            avatar: avatarPath,
            role,
        });

        // Return the company data and token
        res.status(201).json({
            _id: company._id,
            name: company.name,
            email: company.email,
            avatar: company.avatar,
            token: generateToken(company._id),
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

// Generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

module.exports = { registerCompany };
