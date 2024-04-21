const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");
//middlewares
router.use(
  cors({
    credentials: true,
    origin: "https://recipe-web-app999.netlify.app/",
  })
);
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
module.exports = router;
