const express = require('express');

const { organizerregester, organizerlogin, createHackathon ,gethackton } = require('../Contorell/Organizercon');

// const upload=require('../midellware/Multer');

 const authadmin = require('../Midellware/Authorg');

const orgnizerroutes = express.Router();

const upload = require('../Midellware/Multer');



orgnizerroutes.post('/orgnizer-resgretration', organizerregester);
orgnizerroutes.post('/orgnizer-login', organizerlogin);
orgnizerroutes.post('/orgnizer-hackathon', authadmin,  upload.fields([
  { name: 'brochure', maxCount: 1 },
  { name: 'logo', maxCount: 1 },
  { name: 'banner', maxCount: 1 }
])
    , createHackathon);

orgnizerroutes.get('/orgnizer-gethackathon',gethackton );
 


module.exports = orgnizerroutes;