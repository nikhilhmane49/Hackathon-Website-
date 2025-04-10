const mongoose = require('mongoose');

const hackathonSchema = new mongoose.Schema({
    // Name of the hackathon
    hackathonName: {
        type: String,
        required: true
    },

    // Name of the college organizing the hackathon
    collegeName: {
        type: String,
        required: true
    },

    // Address of the college
    collegeAddress: {
        type: String,
        required: true
    },

    // Mode of the hackathon: 'online' or 'offline'
    mode: {
        type: String,
        enum: ['online', 'offline'],
        required: true
    },

    // Total prize pool of the hackathon
    prizePool: {
        type: String,
        required: true
    },

    // Team size configuration: min and max allowed
     teamSize: {
        min: {
            type: Number,
            required: true
        },
        max: {
            type: Number,
            required: true
        },
 },

    // Registration period
 registration: {
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
 },

    // Stages/Rounds in the hackathon
     stages: [
     {
            roundTitle: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            participantTask: {
                type: String,
                required: true
            },
            impact: {
                type: String,
                required: true
            },
             timeline: {
                stageStartDate: {
                    type: Date,
                    required: true
                },
                stageEndDate: {
                    type: Date,
                    required: true
                },
            }
        }
    ],

    // Organizer contact information
    contactDetails: {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
    },

    // List of rules participants must follow
    rules: {
        type: [String],
        required: true
    },

    // Brochure URL (PDF format)
    brochure: {
        type: String,
        required: true
    },

    // Logo image URL of the hackathon
    logo: {
        type: String,
        required: true
    },

    // Banner image URL of the hackathon
    banner: {
        type: String,
        required: true
    },
    sponsors: {
         name: { type: String, required: true },
        tier: { type: String, enum: ['platinum', 'gold', 'silver'], required: true },
        logo: {  type: String, required: true},
    },


});

const HackathonModel = mongoose.model('Hackathon', hackathonSchema);

module.exports = HackathonModel;
