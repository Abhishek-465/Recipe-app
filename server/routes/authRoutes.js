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
    origin: [
      "https://recipe-web-app19.vercel.app",
      "https://www.recipe-web-app19.vercel.app", // Add www subdomain if applicable
    ],
  })
);
router.get("/", test);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", getProfile);
module.exports = router;
