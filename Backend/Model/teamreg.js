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
      })
      
      const teamsModel = mongoose.model('Teamreg',teamschema);
      
      module.exports = teamsModel;