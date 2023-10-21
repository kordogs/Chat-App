const express = require("express");
const router = express.Router();
const userModel = require("../models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/SignUp", async (req, res, next) => {
  const { email, password, username } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json("Email Already Exist");
    }
    const ExistingUsername = await userModel.findOne({ username });
    if (ExistingUsername) {
      return res.status(400).json("Username Already Exist");
    }
    const newUserModel = new userModel({
      email,
      username,
      password: await bcrypt.hash(password, 10),
    });

    await newUserModel.save();
    res.status(201).json("User Successfully created");
  } catch (error) {
    next(error);
  }
});

router.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email });
    if (!existingUser) {
      return res.status(400).json("Wrong Email or Password");
    }
    const passOk = bcrypt.compare(password, existingUser.password);
    if (!passOk) {
      return res.status(400).json("Wrong Email or Password");
    }
    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        username: existingUser.username,
      },
      process.env.JWT_SECRET
    );
    res.cookie("token", token).json({
      httpOnly: true,
      email: existingUser.email,
      id: existingUser._id,
      username: existingUser.username,
    });
  } catch (error) {
    console.error(error);
  }
});

router.post("/Logout", (req, res) => {
  res.cookie("token", "");
  res.status(200).json("ok");
});

module.exports = router;
