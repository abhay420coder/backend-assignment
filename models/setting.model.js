const mongoose = require("mongoose");

const settingSchema = mongoose.Schema({

})

const settingModel = mongoose.model("setting" , settingSchema) 
// const contactModel = mongoose.model("collectionname" , documentschema) 
module.exports = {settingModel}