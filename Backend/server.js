
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const mongoDB = require('./config/mongoDB.js');
// const connectcloudinary = require('./config/Cloudinary.js');


const app = express();

const port = process.env.PORT || 4000;

mongoDB();




app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})