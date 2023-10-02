const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{ 
        type:String,
        required : [true , "please add the contact email address"]
    },
    password:{
        type:String,
        required : [true , "please add the Password"]
    }
})

const userModel = mongoose.model("user" , userSchema) 
// const contactModel = mongoose.model("collectionname" , documentschema) 
module.exports = {userModel}