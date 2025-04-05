
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const mongoDB = require('./Config/configmongo.js');
const connectcloudinary = require('./Config/cloudinary.js');


const userroutes = require('./Routes/userRou.js');


const app = express();


//midleware
app.use(express.json());


const port = process.env.PORT || 4000;

mongoDB();

//*cloudinary
connectcloudinary();


//APi end point
app.use('/api/user',userroutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})