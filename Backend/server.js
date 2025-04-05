
const express = require('express');
const cors = require('cors');
require('dotenv').config(); 
const mongoDB = require('./Config/configmongo.js');
const connectcloudinary = require('./Config/cloudinary.js');


const userroutes = require('./Routes/userRou.js');
const orgnizerroutes = require('./Routes/organizerRou.js');


const app = express();


//midleware
app.use(express.json());


const port = process.env.PORT || 4000;

mongoDB();

//*cloudinary
connectcloudinary();

app.use(cors({
    origin: '*', // Allows requests from any origin
}));

//APi end point
app.use('/api/user',userroutes);
app.use('/api/orgnizer',orgnizerroutes);



app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})