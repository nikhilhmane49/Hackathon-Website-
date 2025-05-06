const organizerModel = require('../Model/organizer');
const userModel = require('../Model/User');
const teamsModel = require('../Model/teamreg');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
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

        if(atoken){
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




// const createHackathon = async (req, res) => {
//   try {
//     const {
//       hackathonName,
//       collegeName,
//       collegeAddress,
//       mode,
//       prizePool,
//       teamSize,
//       registration,
//       stages,
//       contactDetails,
//       rules,
//       sponsors,
//     } = req.body;


//     console.log("req body",sponsors);

//     const brochureFile = req.files?.brochure?.[0];
//     const logoFile = req.files?.logo?.[0];
//     const bannerFile = req.files?.banner?.[0];
//   const sponsorLogoFiles = req.files?.sponsorsLogo || [];


//     // Check required files
//     if (!brochureFile || !logoFile || !bannerFile) {
//       return res.status(400).json({
//         success: false,
//         message: "Brochure, logo, and banner files are required.",
//       });
//     }

//     // Upload files to Cloudinary
//     const brochureUpload = await cloudinary.uploader.upload(brochureFile.path, {
//       resource_type: "raw",
//     });

//     const logoUpload = await cloudinary.uploader.upload(logoFile.path, {
//       resource_type: "image",
//     });

//     const bannerUpload = await cloudinary.uploader.upload(bannerFile.path, {
//       resource_type: "image",
//     });

//     // Parse JSON fields
//     let parsedTeamSize, parsedRegistration, parsedStages, parsedContactDetails, parsedRules, parsedSponsors;

//     try {
//       parsedTeamSize = JSON.parse(teamSize);
//       parsedRegistration = JSON.parse(registration);
//       parsedStages = JSON.parse(stages);
//       parsedContactDetails = JSON.parse(contactDetails);
//       parsedRules = JSON.parse(rules);
//       parsedSponsors = JSON.parse(sponsors);
//     } catch (error) {
//       console.error("Error parsing JSON fields:", error);
//       return res.status(400).json({
//         success: false,
//         message: "Invalid JSON format in one or more fields.",
//       });
//     }

//     console.log("detail length",parsedSponsors.length);
//     console.log("sponsor logo length",sponsorLogoFiles.length);

//     // Upload sponsor logos and attach URLs
//     if (parsedSponsors.length !== sponsorLogoFiles.length) {
//       return res.status(400).json({
//         success: false,
//         message: "Number of sponsor logos does not match sponsor entries.",
//       });
//     }

//     const sponsorsWithLogos = await Promise.all(
//       parsedSponsors.map(async (sponsor, index) => {
//         const logoFile = sponsorLogoFiles[index];
//         const uploadResult = await cloudinary.uploader.upload(logoFile.path, {
//           resource_type: "image",
//         });

//         return {
//           name: sponsor.name,
//           tier: sponsor.tier,
//           logo: uploadResult.secure_url,
//         };
//       })
//     );

//     // Save to DB
//     const newHackathon = await HackathonModel.create({
//       hackathonName,
//       collegeName,
//       collegeAddress,
//       mode,
//       prizePool,
//       teamSize: parsedTeamSize,
//       registration: parsedRegistration,
//       stages: parsedStages,
//       contactDetails: parsedContactDetails,
//       rules: parsedRules,
//       brochure: brochureUpload.secure_url,
//       logo: logoUpload.secure_url,
//       banner: bannerUpload.secure_url,
//       sponsors: sponsorsWithLogos,
//     });

//     res.status(201).json({
//       success: true,
//       message: "Hackathon created successfully",
//       data: newHackathon,
//     });
//   } catch (error) {
//     console.error("Error creating hackathon:", error);
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };


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
      rules,
      sponsors, // still coming from req.body
    } = req.body;

    console.log("req body", sponsors); // ⬅️ Useful for debugging

    const authId = req.auth.id;

    const brochureFile = req.files?.brochure?.[0];
    const logoFile = req.files?.logo?.[0];
    const bannerFile = req.files?.banner?.[0];
    const sponsorLogoFiles = req.files?.sponsorsLogo || [];

    // Check required files
    if (!brochureFile || !logoFile || !bannerFile) {
      return res.status(400).json({
        success: false,
        message: "Brochure, logo, and banner files are required.",
      });
    }

    // Upload files to Cloudinary
    const brochureUpload = await cloudinary.uploader.upload(brochureFile.path, {
      resource_type: "raw",
    });

    const logoUpload = await cloudinary.uploader.upload(logoFile.path, {
      resource_type: "image",
    });

    const bannerUpload = await cloudinary.uploader.upload(bannerFile.path, {
      resource_type: "image",
    });

    // Parse JSON fields
    let parsedTeamSize, parsedRegistration, parsedStages, parsedContactDetails, parsedRules, parsedSponsors;

    try {
      parsedTeamSize = JSON.parse(teamSize);
      parsedRegistration = JSON.parse(registration);
      parsedStages = JSON.parse(stages);
      parsedContactDetails = JSON.parse(contactDetails);
      parsedRules = JSON.parse(rules);
      parsedSponsors = JSON.parse(sponsors); // 👈 logo here is wrong and will be overwritten
    } catch (error) {
      console.error("Error parsing JSON fields:", error);
      return res.status(400).json({
        success: false,
        message: "Invalid JSON format in one or more fields.",
      });
    }

    console.log("detail length", parsedSponsors.length);
    console.log("sponsor logo length", sponsorLogoFiles.length);

    // Check sponsor logo count
    if (parsedSponsors.length !== sponsorLogoFiles.length) {
      return res.status(400).json({
        success: false,
        message: "Number of sponsor logos does not match sponsor entries.",
      });
    }

    // 🔧 Fix: Cleanly overwrite sponsor.logo
    const sponsorsWithLogos = await Promise.all(
      parsedSponsors.map(async (sponsor, index) => {
        const logoFile = sponsorLogoFiles[index];
        const uploadResult = await cloudinary.uploader.upload(logoFile.path, {
          resource_type: "image",
        });

        return {
          name: sponsor.name, // 🔧 make sure these exist
          tier: sponsor.tier,
          logo: uploadResult.secure_url, // 🔧 overwrite logo properly
        };
      })
    );

    console.log("Sponsors going to DB", sponsorsWithLogos);

    // 🔧 Save clean, valid sponsor data
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
      banner: bannerUpload.secure_url,
      sponsors: sponsorsWithLogos, // 🔧 final sponsor data with logos
      hackatonorgid: authId, // 🔧 add organizer ID here
    });

    res.status(201).json({
      success: true,
      message: "Hackathon created successfully",
      data: newHackathon,
    });
  } catch (error) {
    console.error("Error creating hackathon:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
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


const getprofileforhack = async (req, res) => { 

  const authId = req.auth.id;


  console.log("auth id", authId); // Debugging line
  try { 

   
   const user = await userModel.find({ hackatonapllyid: authId }).select('-password');
    res.json({
      success: true,
      data: user,
      message: "User profile fetched successfully",
    });


}catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};



// const updatethenoofteam = async (req, res) => {
//     try {
//       const authId = req.auth.id;
//       const clients = [];

//       res.setHeader('content-type', 'text/event-stream');
//       res.setHeader('Cache-Control', 'no-cache');
//       res.setHeader('Connection', 'keep-alive');
//       res.flushHeaders();
      
//       const client = { id: organizerId, res }
//       clients.push(client);

//       res.on('close', () => {
//          const index = clients.indexOf(client);
//     if (index !== -1) clients.splice(index, 1);
//       });


//       Team.watch().on('change', async (change) => {
//     console.log('Database change detected:', change);

//     // Find all unique organizer IDs
//     const organizerIds = [...new Set(clients.map(c => c.id))];

//     for (const orgId of organizerIds) {
//       // Count how many teams are registered for this organizer
//       const count = await Team.countDocuments({ organizerid: orgId });

//       // Send the updated count to all connected clients of this organizer
//       clients
//         .filter(c => c.id === orgId)
//         .forEach(c => {
//           c.res.write(`data: ${JSON.stringify({ count })}\n\n`);
//         });
//     }
      
//      }
//     catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: "Internal server error",
//         });
//     }
// }


const clients = [];



//   console.log('Database change detected:', change);

//   // Find all unique organizer IDs
//   const organizerIds = [...new Set(clients.map(c => c.id))];

//   for (const orgId of organizerIds) {
//     // Count how many teams are registered for this organizer
//     const count = await teamsModel.countDocuments({ hackathonid: orgId });

//     // Send the updated count to all connected clients of this organizer
//     clients
//       .filter(c => c.id === orgId)
//       .forEach(c => {
//         c.res.write(`data: ${JSON.stringify({ count })}\n\n`);
//       });
//   }
// });




teamsModel.watch().on('change', async (change) => {
  console.log('Database change detected:', change);

  const organizerIds = [...new Set(clients.map(c => c.id))];

  for (const orgId of organizerIds) {
    // const count = await teamsModel.countDocuments({ hackathonid: orgId });

    console.log(typeof orgId, orgId);


    const count = await teamsModel.countDocuments({
      organizerid: { $in: [new mongoose.Types.ObjectId(orgId)] }
 // 💡 match array field
  });

    console.log("count", count); // Debugging line

    clients
      .filter(c => c.id === orgId)
      .forEach(c => {
        c.res.write(`data: ${JSON.stringify({ count })}\n\n`);
      });
  }
});


const streamTeamcount = async (req, res) => { 

  try {
    const organizerId = req.auth.id;
    console.log("Organizer ID:", organizerId); // Debugging line
    if(!organizerId) {
      return res.status(400).json({
        success: false,
        message: "Organizer ID is required",
      });
    }

    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');

    const client = { id: organizerId, res };
    clients.push(client);

    res.on('close', () => {
      const index = clients.indexOf(client);
      if (index !== -1) clients.splice(index, 1);
    });


      const initialCount = await teamsModel.countDocuments({
      organizerid: { $in: [new mongoose.Types.ObjectId(organizerId)] },
    });

    res.write(`data: ${JSON.stringify({ count: initialCount })}\n\n`);


  }catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}


module.exports={organizerregester,organizerlogin , createHackathon ,gethackton ,getprofileforhack,streamTeamcount};