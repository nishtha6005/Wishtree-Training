let express=require('express')
let MRController=require('../controller/mr')
let router = express.Router()

router.get('/get',MRController.getMR);

router.get('/get/:id',MRController.getMRById);

router.post('/add',MRController.addMR);

router.delete('/delete/:id',MRController.deleteMR);

module.exports = router;