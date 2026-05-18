const express = require('express');
const router = express.Router();
const {getallUsers,createNewUser,
    upadateUser,deleteUser, getSingleUser}= require("../controllers/userController")

router.get("/",getallUsers)
router.get("/:id",getSingleUser)
router.post("/",createNewUser)
router.put("/:id",upadateUser)
router.delete("/:id",deleteUser)




module.exports = router;