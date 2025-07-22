
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


const allowedOrigins = [
    'http://localhost:5173', // for dev
    'https://hackathon-website-hazel.vercel.app',
    'https://hackathon-website-git-main-nikhil-manes-projects.vercel.app'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  }));
  


const port = process.env.PORT || 4000;

mongoDB();

//*cloudinary
connectcloudinary();



//APi end point
app.use('/api/user',userroutes);
app.use('/api/orgnizer',orgnizerroutes);

app.get('/', (req,res)=> {
  res.send("<h1>Running.......</h1>")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})