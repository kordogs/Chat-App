const express = require("express");
const router = express.Router();
const conversationModel = require("../models/Conversations");

router.post("/", async (req, res) => {
  const newConversationModel = new conversationModel({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversationModel.save();
    res.status(200).json(savedConversation);
  } catch (error) {
    res.status(500).json("something went wrong");
    console.error(error);
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const conversation = await conversationModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json(error);
    console.error(error);
  }
});

module.exports = router;
