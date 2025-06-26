const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/register',(req,res) => {
    res.send("<h1> Register Here</h1>");
})

router.post('/register',userController.registerUser);

router.get('/login',(req,res) => {
    res.status(200).json("login page");
})

router.post('/login',userController.loginUser);

module.exports = router;