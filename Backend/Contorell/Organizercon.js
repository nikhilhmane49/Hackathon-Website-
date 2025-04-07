const organizerModel = require('../Model/organizer');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
require('dotenv').config();
const validator = require('validator');
const HackathonModel = require('../Model/hostevent');




//##api for regester


const organizerregester= async (req,res)=>{



    try {

        const{name,email,password}=req.body;


        if(!name||!email||!password){
            return res.json({
                success:false,
                Message:"fille all the detail"
            })
        }
        
        //email validactor
        
        if (!validator.isEmail(email)) {
            return res.json({
                success:false,
                message:"Please provide a valid email"
            })
        }
        //password validation
        
        if(!validator.isLength(password,{min:8})){
            return res.json({
                success:false,
                message:"Password must be at least 8 characters long"
            })
        }
        
        
        //hashing the password
        
        const salt= await bcrypt.genSalt(10);
        
        const hashpassword = await bcrypt.hash(password,salt);
        
        
        const data ={
        
            name,
            email,
            password:hashpassword,
        }
        
        const organizermodel = new organizerModel (data);
        
        const organizer= await organizermodel.save();
        
        
        const atoken = jwt.sign({id:organizer._id},process.env.JWT_SECRET);

        if(token){
        res.status(200).json({
            success: true,
            atoken: atoken,
            organizer:organizer,
            message: "organizer regester successful"
        })
    }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        })
    }



}


const organizerlogin = async(req,res)=>{



try {
  
    const {email,password}=req.body;

    const organizer = await organizerModel.findOne({email});

    if(!organizer){
       return res.json({
            success:false,
            message:"organizer does not extist"
        })
    }
    
    const ismacth= await bcrypt.compare(password,organizer.password);

    if(ismacth){

        const atoken = jwt.sign({id:organizer._id},process.env.JWT_SECRET);

        res.json({
success:true,
atoken,

        })
    }

    else{
        res.json({
            success:false,
            message:"The input is worng"
        })
    }

} catch (error) {
    console.log(error);
    return res.status(500).json({
        success: false,
        message: "Internal server error"
    })
}

}




const createHackathon = async (req, res) => {
    try {
        const {
            hackathonName,
            collegeName,
            collegeAddress,
            mode,
            prizePool,
            teamSize,
            registration,
            stages,
            contactDetails,
            rules
        } = req.body;

//         const {
//   hackathonName,
//   collegeName,
//   collegeAddress,
//   mode,
//   prizePool,
//   // Team size fields
//   min,           // minimum team size
//   max,           // maximum team size
//   // Registration dates
//   startDate,     // registration start date
//   endDate,       // registration end date
//   // Stage details (for a single stage, since they're flattened)
//   roundTitle,
//   description,
//   participantTask,
//   impact,
//   // Stage timeline (renamed to avoid conflict with registration dates)
//   stageStartDate,
//   stageEndDate,
//   // Organizer contact details (flattened)
//   name,          // organizer's name
//   email,         // organizer's email
//   phone,         // organizer's phone
//   // Other rules array
//   rules
// } = req.body;


        const brochureFile = req.files?.brochure?.[0];
        const logoFile = req.files?.logo?.[0];
        const bannerFile = req.files?.banner?.[0];

        if (!brochureFile || !logoFile || !bannerFile) {
            return res.status(400).json({
                success: false,
                message: 'Brochure, logo, and banner files are required.'
            });
        }

        // Upload files to Cloudinary
        const brochureUpload = await cloudinary.uploader.upload(brochureFile.path, {
            resource_type: "raw"
        });

        const logoUpload = await cloudinary.uploader.upload(logoFile.path, {
            resource_type: "image"
        });

        const bannerUpload = await cloudinary.uploader.upload(bannerFile.path, {
            resource_type: "image"
        });

        // Parse JSON fields (because they'll come in as strings from form-data)
        const parsedTeamSize = JSON.parse(teamSize);
        const parsedRegistration = JSON.parse(registration);
        const parsedStages = JSON.parse(stages);
        const parsedContactDetails = JSON.parse(contactDetails);
        const parsedRules = JSON.parse(rules);

        // Save to DB
        const newHackathon = await HackathonModel.create({
            hackathonName,
            collegeName,
            collegeAddress,
            mode,
            prizePool,
            teamSize: parsedTeamSize,
            registration: parsedRegistration,
            stages: parsedStages,
            contactDetails: parsedContactDetails,
            rules: parsedRules,
            brochure: brochureUpload.secure_url,
            logo: logoUpload.secure_url,
            banner: bannerUpload.secure_url
        });
// const newHackathon = await HackathonModel.create({
//  hackathonName,
//   collegeName,
//   collegeAddress,
//   mode,
//   prizePool,
//   // Team size fields
//   min,           // minimum team size
//   max,           // maximum team size
//   // Registration dates
//   startDate,     // registration start date
//   endDate,       // registration end date
//   // Stage details (for a single stage, since they're flattened)
//   roundTitle,
//   description,
//   participantTask,
//   impact,
//   // Stage timeline (renamed to avoid conflict with registration dates)
//   stageStartDate,
//   stageEndDate,
//   // Organizer contact details (flattened)
//   name,          // organizer's name
//   email,         // organizer's email
//   phone,         // organizer's phone
//   // Other rules array
//     rules,
//   brochure: brochureUpload.secure_url,
//             logo: logoUpload.secure_url,
//             banner: bannerUpload.secure_url
// });
        res.status(201).json({
            success: true,
            message: "Hackathon created successfully",
            data: newHackathon
        });

    } catch (error) {
        console.error("Error creating hackathon:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};


const gethackton = async (req, res) => {
  try {
    const allHackathons = await HackathonModel.find().select('-password');
    res.json({
      success: true,
      data: allHackathons,
      message: "Hackathons fetched successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};


module.exports={organizerregester,organizerlogin , createHackathon ,gethackton};