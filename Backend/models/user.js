const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true
    }
},{timestamps:true});

const googleUserSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    img:{
        type:String
    }
},{timestamps:true})

const UserModel = mongoose.model('users',userSchema);
const GoogleUserModel = mongoose.model('googleUser',googleUserSchema);

module.exports = {UserModel,GoogleUserModel};