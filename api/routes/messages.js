const express = require("express");
const router = express.Router();
const messageModel = require("../models/Messages.js");

router.post("/", async (req, res) => {
  const newMessage = new messageModel(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

router.get("/:conversationId", async (req, res) => {
  try {
    const messages = await messageModel.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
