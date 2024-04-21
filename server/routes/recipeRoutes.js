const express = require("express");
const router = express.Router();
const request = require("request");
const cors = require("cors");
const dotenv = require("dotenv").config();
//middlewares
router.use(
  cors({
    credentials: true,
    origin: "https://recipe-web-app999.netlify.app",
  })
);
router.get("/recipes", (req, res) => {
  const query = req.query.query || ""; // Default query if not provided

  request.get(
    {
      url: process.env.API_KEY + query,
      headers: {
        "X-Api-Key": "znSeVfWO3CHpMAAu1C3bCA==wUskrnVipTPpDDUc",
      },
    },
    function (error, response, body) {
      if (error) {
        console.error("Request failed:", error);
        res.status(500).send("Request failed");
      } else if (response.statusCode !== 200) {
        console.error("Error:", response.statusCode, body.toString("utf8"));
        res.status(response.statusCode).send(body.toString("utf8"));
      } else {
        res.json(JSON.parse(body));
      }
    }
  );
});
module.exports = router;
