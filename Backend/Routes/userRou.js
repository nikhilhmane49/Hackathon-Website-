const express = require('express');

const { regester, userlogin, updateProfile , applyToHackathon } = require('../Contorell/Usercon.js');

const authuser = require('../Midellware/Authuser.js');

const userroutes = express.Router();

const upload=require('../Midellware/Multer.js');

userroutes.post('/user-resgretration', regester);
userroutes.post('/user-login', userlogin);
userroutes.post('/user-update', upload.fields([{ name: 'resume', maxCount: 1 }]), authuser, updateProfile);
userroutes.post('/apply-hackathon', authuser, applyToHackathon);

module.exports = userroutes;