// middleware

const asyncHandler = require('express-async-handler');
const {userModel} = require('../models/user.model')
const userService = require('../service/user.service');




/* 
// @desc get all users
// @route GET /api/users
// @access public

const getFullUsers = asyncHandler(async(req , res) => {
    // console.log("getFullUsers is working")
    const users = await userModel.find(); // get value from collection
    // res.status(200).json({"message":"getFullUsers  is working"});
    res.status(200).json(users);
})


// @desc Get user
// @route GET /api/users/:id
// @access public
const getUserById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"getUserById  is working" , "id":req.params.id});
    // http://localhost:5000/api/users/id ex:- http://localhost:5000/api/users/2
    const user = await userModel.findById(req.params.id); // get value from collection

    if(!user){
        res.status(404);
        throw new Error("User Not Found");
    }
    res.status(200).json(user);
})


// @desc Create new users
// @route POST /api/users
// @access public
const postUser = asyncHandler(async(req , res) => {
    console.log("req.body ----------  " ,req.body)
    const {password , email } = req.body;
    if(!password || !email ){
        res.status(400);
        throw new Error("All fiels are manadatory")
    }
    const users = await userModel.create({
        password,
        email
    })

    res.status(201).json(users);
})


// @desc Update user
// @route PUT /api/users/:id
// @access public
const updateUserById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"updateUserById  is working", "id":req.params.id});
    // first we will get user
    const user = await userModel.findById(req.params.id); // get value from collection

    if(!user){
        res.status(404);
        throw new Error("User Not Found");
    }

    const updatedUser = await userModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedUser);
    
})


// @desc Delete user
// @route DELETE /api/users/:id
// @access public
const deleteUserById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"deleteUserById  is working", "id":req.params.id});
    // first we will get user
    const user = await userModel.findById(req.params.id); // get value from collection

    if(!user){
        res.status(404);
        throw new Error("User Not Found");
    }
    await userModel.findOneAndDelete( user);
    res.status(200).json(user);
})





module.exports = {
    getFullUsers , 
    getUserById , 
    postUser,
    updateUserById,
    deleteUserById
} 


*/



// router.post('/authenticate', authenticate);
// router.get('/', getAll);



function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(user => res.json(user))
        .catch(next);
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(next);
}

module.exports = {authenticate , getAll};