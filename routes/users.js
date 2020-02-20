const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')

router.get('/', UserController.getUsers)

router.post('/', UserController.register)

router.get('/:userId', UserController.getUser)

router.patch('/:userId', UserController.updateUser)

router.delete('/:userId', UserController.deleteUser)

router.post('/signin', UserController.signin)

router.post('/admin', UserController.registerAdmin)

router.post('/admin/signin', UserController.signinAdmin)


module.exports = router