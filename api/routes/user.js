const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userModel = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const { token } = await req.cookies;
    if (token) {
      try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        res.status(200).json(user);
      } catch (error) {
        console.error(error);
      }
    } else {
      res.json(null);
    }
  } catch (err) {
    console.error(err);
  }
});

router.get("/findUser", async (req, res) => {
  const userId = req.query.userId;
  const email = req.query.email;
  try {
    const user = userId
      ? await userModel.findById(userId)
      : await userModel.findOne({ email: email });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
