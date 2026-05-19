const express = require('express');
const router = express.Router();
const {getallUsers,createNewUser,
    upadateUser,deleteUser,
     getSingleUser,logInUser,getProfile}= require("../controllers/userController")
const authMiddleware = require("../middleware/authMiddleware")

router.get("/",getallUsers)
router.get("/:id",getSingleUser)
router.post("/",createNewUser)
router.put("/:id",upadateUser)
router.delete("/:id",deleteUser)

router.post("/login",logInUser)
router.get("/profile",authMiddleware,getProfile)




module.exports = router;