
const express = require("express")
const { addTransection, getAllTransection, deleteTranection, editTranection } = require("../controllers/transectionCont")


// router object 
const router = express.Router()

router.post("/get-transection",getAllTransection)
router.post("/add-transection",addTransection)
router.post("/delete-transection",deleteTranection)
router.post("/edit-transection",editTranection)


module.exports = router