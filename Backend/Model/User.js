// Backend - User Model
const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    resume: {
        type: String // You can store a URL or file path
    },
    githubLink: {
        type: String
    },
    linkedinLink: {
        type: String
    },
    technicalSkills: {
        type: [String]  // Array of strings (e.g. ["JavaScript", "Node.js"])
    },
    projectLinks: {
        type: [String]  // Array of links to projects
    },
    education: {
        college: {
            type: String
        },
        degree: {
            type: String
        },
        year: {
            type: Number
        }
    },
    contactNumber: {
        type: String
    },

    // hackatonapllyid:[ {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'hostevent'
    // }]
});

const userModel = mongoose.model('user', userschema);

module.exports = userModel;