const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema(
  {
    members: { type: Array },
  },
  { timestamps: true }
);

const conversationModel = mongoose.model("Conversations", conversationSchema);

module.exports = conversationModel;
