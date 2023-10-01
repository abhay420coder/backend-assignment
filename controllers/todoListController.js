// middleware

const asyncHandler = require('express-async-handler');
const {todoListModel} = require('../models/todoListModel')


// @desc get all todoLists
// @route GET /api/todoLists
// @access public

const getFullTodoList = asyncHandler(async(req , res) => {
    // console.log("getFullTodoList is working")
    const todoLists = await todoListModel.find(); // get value from collection
    res.status(200).json(todoLists);
})


// @desc Get todoList
// @route GET /api/todoLists/:id
// @access public
const getTodoListsById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"getTodoListsById  is working" , "id":req.params.id});
    // http://localhost:5000/api/todoLists/id ex:- http://localhost:5000/api/todoLists/2
    const todoList = await todoListModel.findById(req.params.id); // get value from collection

    if(!todoList){
        res.status(404);
        throw new Error("todoList Not Found");
    }
    res.status(200).json(todoList);
})


// @desc Create new todoLists
// @route POST /api/todoLists
// @access public
const postTodoList = asyncHandler(async(req , res) => {
    console.log("req.body ----------  " ,req.body)
    const {title , description } = req.body;
    if(!title || !description ){
        res.status(400);
        throw new Error("All fiels are manadatory")
    }
    const todoList = await todoListModel.create({
      title,
      description,
    })

    res.status(201).json(todoList);
})


// @desc Update TodoList
// @route PUT /api/todoList/:id
// @access public
const updateTodoListById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"updateTodoListById  is working", "id":req.params.id});
    // first we will get TodoList
    const todoList = await todoListModel.findById(req.params.id); // get value from collection

    if(!todoList){
        res.status(404);
        throw new Error("TodoList Not Found");
    }

    const updatedTodoList = await todoListModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );
    res.status(200).json(updatedTodoList);
    
})


// @desc Delete todoList
// @route DELETE /api/todoList/:id
// @access public
const deleteTodoListById = asyncHandler(async(req , res) => {
    // res.status(200).json({"message":"deleteTodoListById  is working", "id":req.params.id});
    // first we will get TodoList
    const todoList = await todoListModel.findById(req.params.id); // get value from collection

    if(!todoList){
        res.status(404);
        throw new Error("TodoList Not Found");
    }
    await todoListModel.findOneAndDelete( todoList);
    res.status(200).json(todoList);
})

module.exports = {
  getFullTodoList , 
  getTodoListsById , 
  postTodoList,
  updateTodoListById,
  deleteTodoListById
}