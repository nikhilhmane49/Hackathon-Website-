const mongoose = require('mongoose');

const organizerschema = new mongoose.Schema({
        name: {
        type: String,
        required:true
    },
     email: {
        type: String,
         required: true,
        unique:true
    },
      password: {
        type: String,
        required:true
    },
      })
      
      const organizerModel = mongoose.model('Organizer',organizerschema);
      
      module.exports = organizerModel;