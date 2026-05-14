const express = require('express');
const router = express.Router();
const {getallUsers,createNewUser,upadateUser}= require("../controllers/userController")

router.get("/",getallUsers)
router.post("/",createNewUser)
router.put("/:id",upadateUser)



module.exports = router;