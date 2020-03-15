const express = require('express')
const router = express.Router()
const TransactionController = require('../controllers/TransactionController')
const auth = require('../middlewares/auth')

router.get('/', auth, TransactionController.getTransaction)

router.post('/', auth, TransactionController.createTransaction)

router.patch('/:transactionId', auth, TransactionController.updateTransaction)

module.exports = router