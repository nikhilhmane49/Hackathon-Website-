const userModel = require('../Model/User');
const Hackathon = require('../Model/hostevent');
const bcrypt = require('bcrypt');
const cloudinary = require('cloudinary').v2;
const jwt = require('jsonwebtoken');
require('dotenv').config();

const validator = require('validator');


//##api for regester


const regester= async (req,res)=>{



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
        
        const usermodel = new userModel (data);
        
        const user= await usermodel.save();
        
        
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        if(token){
        res.status(200).json({
            success: true,
            token: token,
            message: "User regester successful"
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


//###api for login

const userlogin = async(req,res)=>{



try {
  
    const {email,password}=req.body;

    const user = await userModel.findOne({email});

    if(!user){
       return res.json({
            success:false,
            message:"user does not extist"
        })
    }
    
    const ismacth= await bcrypt.compare(password,user.password);

    if(ismacth){

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET);

        res.json({
success:true,
token,

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
}}



//######Api for update the profile


const updateProfile = async (req, res) => {
    try {
        const {
            userid,
            bio,
            githubLink,
            linkedinLink,
            technicalSkills,
            projectLinks,
            education,
            contactNumber
        } = req.body;

        // Expecting resume file: req.files.resume
        const resumeFile = req.files?.resume?.[0];

        if (!userid || !contactNumber) {
            return res.status(400).json({
                success: false,
                message: "Required data is missing"
            });
        }

        let resumeUrl;
        if (resumeFile) {
            const resumeUpload = await cloudinary.uploader.upload(resumeFile.path, {
                resource_type: "raw"
            });
            resumeUrl = resumeUpload.secure_url;
        }

        let parsedEducation;
        try {
            parsedEducation = JSON.parse(education);
        } catch (e) {
            return res.status(400).json({
                success: false,
                message: "Invalid education format"
            });
        }

        const updateData = await userModel.findByIdAndUpdate(
            userid,
            {
                ...(resumeUrl && { resume: resumeUrl }),
                bio,
                githubLink,
                linkedinLink,
                technicalSkills,
                projectLinks,
                education: parsedEducation,
                education,
                contactNumber
            },
            { new: true }
        );

        if (!updateData) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        res.json({
            success: true,
            data: updateData,
            message: "The user profile is updated"
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};



const applyToHackathon = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Now it will work
    const { hackathonId } = req.body;

    if (!hackathonId) {
      return res.status(400).json({ message: 'Hackathon ID is required' });
    }
  
      const organizerId = await Hackathon.findById(hackathonId);
      if (!organizerId) {
        return res.status(404).json({ message: 'org id  not found' });
      }
      
    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      { hackatonapllyid: organizerId.hackatonorgid },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'Successfully applied to hackathon', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};












module.exports={regester,userlogin,updateProfile ,applyToHackathon};

