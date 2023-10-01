const express = require('express')
const router = express.Router();

const {getFullTodoList , getTodoListsById , postTodoList,updateTodoListById,deleteTodoListById} = require('../controllers/todoListController')

// routing

/* 
router.route('/').get(getFullTodoList)
router.route('/').post(postTodoList)
router.route('/:id').get(getTodoListsById)
router.route('/:id').put(updateTodoListById)
router.route('/:id').delete(deleteTodoListById) 


// works same as

router.route('/').get(getFullTodoList).post(postTodoList)
router.route('/:id').get(getTodoListsById).put(updateTodoListById).delete(deleteTodoListById)
*/


/* 
const routing = (obj)=>{
    router.route('/').get(obj.getFullData).post(obj.postData)
    router.route('/:id').get(obj.getDataById).put(obj.updateDataById).delete(obj.deleteDataById)
}
module.exports = {routing}; 
*/
  
router.route('/').get(getFullTodoList).post(postTodoList)
router.route('/:id').get(getTodoListsById).put(updateTodoListById).delete(deleteTodoListById)
module.exports = router;