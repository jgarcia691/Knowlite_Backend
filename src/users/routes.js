const express = require('express');
const router = express.Router();
const userController = require('./controller');

router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.get('/email/:correo', userController.getUserByEmail);
router.post('/login', userController.loginUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
