const express = require('express');
const router = express.Router();

const productRoutes = require('./productRoutes');
const transactionRoutes = require('./transactionRoutes');
const transactionDetailRoutes = require('./transactionDetailRoutes');
const userRoutes = require('./userRoutes');

// Use imported routes
router.use('/', productRoutes);
router.use('/', transactionRoutes);
router.use('/', transactionDetailRoutes);
router.use('/', userRoutes);

module.exports = router;
