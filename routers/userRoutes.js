const express = require('express');
const router = express.Router();
const {getallUsers,createNewUser,upadateUser,deleteUser}= require("../controllers/userController")

router.get("/",getallUsers)
router.post("/",createNewUser)
router.put("/:id",upadateUser)
router.delete("/:id",deleteUser)




module.exports = router;