const express = require('express');

const upload = require('../Midellware/Multer');

// const upload = require('../midellware/Multer');
const { organizerregester, organizerlogin, createHackathon ,gethackton,getteamforhack,streamTeamcount,gethacktonoforz } = require('../Contorell/Organizercon');



const authadmin = require('../Midellware/Authorg');
const verifyTokenQuery = require('../Midellware/verifyTokenQuery');

const orgnizerroutes = express.Router();





orgnizerroutes.post('/orgnizer-resgretration', organizerregester);
orgnizerroutes.post('/orgnizer-login', organizerlogin);
orgnizerroutes.get('/orgnizer-hacktonteam',authadmin, getteamforhack);
orgnizerroutes.get('/orgnizer-hacktondata',authadmin, gethacktonoforz);
orgnizerroutes.post('/orgnizer-hackathon', authadmin,  upload.fields([
  { name: 'brochure', maxCount: 1 },
  { name: 'logo', maxCount: 1 },
  { name: 'banner', maxCount: 1 },
   { name: "sponsorsLogo", maxCount: 10 }
])
    , createHackathon);

orgnizerroutes.get('/orgnizer-gethackathon',gethackton );
orgnizerroutes.get('/orgnizer-teamcount',verifyTokenQuery,streamTeamcount );


module.exports = orgnizerroutes;