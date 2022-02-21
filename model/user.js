const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    
    // Define Mongoose Model
   // Define Schema Types
  
    _id: new Schema.Types.ObjectId,
    name: {
        firstName: String,
        lastName: String
    },
    email: {
        type: String
    },
    mobile: {
        type: Number
    },
    avatar: {
        type: Buffer
    },
    isAccountVerified: {
        type: Boolean
    },
    socialProfiles: [{
            twitter: String
        },
        {
            facebook: String
        },
        {
            linkedin: String
        },
        {
            instagram: String
        }
    ],
    accountCreated: {
        type: Date,
        default: Date.now
    }
}, {
    // Define MongoDB Collection
    collection: 'users'
});

