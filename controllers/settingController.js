// middleware

const asyncHandler = require('express-async-handler');
const {settingModel} = require('../models/setting.model')


// @desc get all settings
// @route GET /api/settings
// @access public

const getFullSettings = asyncHandler(async(req , res) => {
    // console.log("getFullSettings is working")
    const settings = await settingModel.find(); // get value from collection
    // res.status(200).json({"message":"getFullSettings  is working"});
    res.status(200).json(settings);
})


// @desc Get setting
// @route GET /api/settings/:id
// @access public
const getSettingById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"getSettingById  is working" , "id":req.params.id});
    // http://localhost:5000/api/settings/id ex:- http://localhost:5000/api/settings/2
    const setting = await settingModel.findById(req.params.id); // get value from collection

    if(!setting){
        res.status(404);
        throw new Error("Setting Not Found");
    }
    res.status(200).json(setting);
})


// @desc Create new settings
// @route POST /api/settings
// @access public
const postSetting = asyncHandler(async(req , res) => {
    console.log("req.body ----------  " ,req.body)
    const {name , email , phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fiels are manadatory")
    }
    const settings = await settingModel.create({
        name,
        email,
        phone
    })

    res.status(201).json(settings);
})


// @desc Update setting
// @route PUT /api/settings/:id
// @access public
const updateSettingById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"updateSettingById  is working", "id":req.params.id});
    // first we will get setting
    const setting = await settingModel.findById(req.params.id); // get value from collection

    if(!setting){
        res.status(404);
        throw new Error("Setting Not Found");
    }

    const updatedSetting = await settingModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedSetting);
    
})


// @desc Delete setting
// @route DELETE /api/settings/:id
// @access public
const deleteSettingById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"deleteSettingById  is working", "id":req.params.id});
    // first we will get setting
    const setting = await settingModel.findById(req.params.id); // get value from collection

    if(!setting){
        res.status(404);
        throw new Error("Setting Not Found");
    }
    await settingModel.findOneAndDelete( setting);
    res.status(200).json(setting);
})

module.exports = {
    getFullSettings , 
    getSettingById , 
    postSetting,
    updateSettingById,
    deleteSettingById
}