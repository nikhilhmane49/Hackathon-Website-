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
         }]
     

      })
      
      const teamsModel = mongoose.model('Teamreg',teamschema);
      
      module.exports = teamsModel;