const mongoose = require('mongoose');

const teamschema = new mongoose.Schema({
        teamname: {
        type: String,
        required: true,
         unique:true
    },
     praticipante:[ {
        type: String,
         required: true,
       
     }],

      hackatonapllyid:[ {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'hostevent'
     }],
      useradminid: {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'user',
          //    unique:true
     },
      organizerid:[ {
             type: mongoose.Schema.Types.ObjectId,
             ref: 'Organizer'
     }],
        userreg: {
        type: Boolean,
        default: false
    }
     

      })
      
      const teamsModel = mongoose.model('Teamreg',teamschema);
      
      module.exports = teamsModel;