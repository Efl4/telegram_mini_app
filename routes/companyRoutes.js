// routes/companyRoutes.js
const express = require('express');
const { registerCompany } = require('../controllers/companyController');
const multer = require('multer');
const router = express.Router();

// Multer setup for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Define the uploads folder for storing images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to the file name
    },
});

const upload = multer({ storage });

// Register a company
router.post('/register', upload.single('avatar'), registerCompany);

module.exports = router;
