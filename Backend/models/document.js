const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default:"Untitled Document",
    },
    content: {
      type: Object,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    authorType:{
      type: String,
      enum: ['User','GoogleUser' ],
      required:true,
    },
    collaborators: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        userType: {
          type: String,
          enum: ["User", "GoogleUser"], // Distinguish the model
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;
