const express = require('express');
const router = express.Router();
const {getallUsers}= require("../controllers/userController")

router.get("/",getallUsers)



module.exports = router;