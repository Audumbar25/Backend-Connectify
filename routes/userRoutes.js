const express = require("express");
const router = express.Router();
const {
    userRoute,
    registerUser,
    loginUser,
    currentUser
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");

router.route("/").post(userRoute);
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/current").get(validateToken ,currentUser);

module.exports = router;
