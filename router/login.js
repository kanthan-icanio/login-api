const express = require('express')
const router = express.Router()
const usercontroller = require("../controller/logincontroller")

router.post("/sign" , usercontroller.sigin)
router.get("/sign", usercontroller.user)
router.post("/login", usercontroller.login)

module.exports = router