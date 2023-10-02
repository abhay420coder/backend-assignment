const express = require('express')
const router = express.Router();

// const {getFullUsers , postUser , getUserById , updateUserById , deleteUserById} = require('../controllers/userController')


// routing

/* 
router.route('/').get(getFullUsers)
router.route('/').post(postUser)
router.route('/:id').get(getUserById)
router.route('/:id').put(updateUserById)
router.route('/:id').delete(deleteUserById) 


// works same as

router.route('/').get(getFullUsers).post(postUser)
router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)
*/


/* 
const routing = (obj)=>{
    router.route('/').get(obj.getFullData).post(obj.postData)
    router.route('/:id').get(obj.getDataById).put(obj.updateDataById).delete(obj.deleteDataById)
}
module.exports = {routing}; 
*/
  
// router.route('/').get(getFullUsers).post(postUser)
// router.route('/:id').get(getUserById).put(updateUserById).delete(deleteUserById)

const {authenticate , getAll} = require('../controllers/userController')

router.post('/authenticate', authenticate);
router.get('/', getAll);
module.exports = router;