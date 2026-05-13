const express = require('express');
const router = express.Router();
const {getallUsers,createNewUser}= require("../controllers/userController")

router.get("/",getallUsers)
router.post("/",createNewUser)



module.exports = router;