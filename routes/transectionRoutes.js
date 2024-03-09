const express = require('express');
const { addTransection, getAllTransection,editTransection,deleteTransection } = require('../controllers/transectionCtrl');

//router object

const router = express.Router();

//routers

//add transections POST method
router.post('/add-transection',addTransection)
//edit transection
router.post('/edit-transection',editTransection)
//deletion
router.post('/delete-transection',deleteTransection)

// gettransection

router.post('/get-transection',getAllTransection)
module.exports = router