const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,       
        minlength: 3,
        maxlength: 30
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true, 
        match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 
        validate:(data)=>{

        }
    },
    password: {
        type: String,
        required: true,
        
    },
    firstName: {
        type: String,
        required: false, 
        trim: true,
        maxlength: 50
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        maxlength: 50
    },
    dateOfBirth: {
        type: Date,
        required: false 
    },
    profilePicture: { 
        type: String,
        required: false,
        trim: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'], 
        default: 'user'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    
},{
    timestamps:true
});


const User = mongoose.model('User', userSchema);

module.exports = User;