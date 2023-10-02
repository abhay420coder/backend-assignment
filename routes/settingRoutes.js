const express = require('express')
const router = express.Router();

const { getFullSettings , postSetting , getSettingById , updateSettingById , deleteSettingById} = require('../controllers/settingController')

// routing

/* 
router.route('/').get(getFullSettings)
router.route('/').post(postSetting)
router.route('/:id').get(getSettingById)
router.route('/:id').put(updateSettingById)
router.route('/:id').delete(deleteSettingById) 


// works same as

router.route('/').get(getFullSettings).post(postSetting)
router.route('/:id').get(getSettingById).put(updateSettingById).delete(deleteSettingById)
*/


/* 
const routing = (obj)=>{
    router.route('/').get(obj.getFullData).post(obj.postData)
    router.route('/:id').get(obj.getDataById).put(obj.updateDataById).delete(obj.deleteDataById)
}
module.exports = {routing}; 
*/
  
router.route('/').get(getFullSettings).post(postSetting)
router.route('/:id').get(getSettingById).put(updateSettingById).delete(deleteSettingById)
module.exports = router;