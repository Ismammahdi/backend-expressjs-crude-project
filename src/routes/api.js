const express=require('express');
const { Test, Test2} = require('../controller/TestController');
const UserController = require('../controller/UserController');




const router = express.Router();

 router.get('/test',Test)
 router.post('/test2',Test2)
 router.post('/create_user',UserController.createUser)
 router.get('/get_user',UserController.getAllUser)
 router.post('/update_user/:id',UserController.updateUser)
 router.get('/delete_user/:id',UserController.deleteUser)

module.exports = router