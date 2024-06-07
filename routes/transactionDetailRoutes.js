const express = require('express');
const router = express.Router();
const transactionDetailController = require('../controllers/transactionDetailController')
const authMiddleware = require('../middleware/authMiddleware');

// Admin //

// Get All Transaction Details (admin-only)
router.get('/admin/transaction/detail', authMiddleware, transactionDetailController.getAllTransactionDetails);
// Get Transaction Detail by ID (admin-only)
router.get('/admin/transaction/detail/:id', authMiddleware, transactionDetailController.getTransactionDetailById);

// Client //

// Get Client Transaction Detail (client-only)
router.get('/client/transaction/detail', authMiddleware, transactionDetailController.getClientTransactionDetail);

module.exports = router;

