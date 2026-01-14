const {getallthelist,addtodb}=require("../controllers/todo")
const express=require("express")
const router=express.Router()
router.get('/',getallthelist)
router.post('/',addtodb)
module.exports=router