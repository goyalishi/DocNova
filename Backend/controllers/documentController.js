const Document = require("../models/document.js");

async function createNewDocument(req, res) {
  try {
    const { title, content } = req.body;
    const author = req.userId;

    const newDoc = new Document({
      title,
      content,
      author,
      collaborators: [{ userId: author }],
    });
    console.log(newDoc);

    await newDoc.save();
    res.status(201).json({ newDoc, msg: "New Document Created" });
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
}

async function getDocument(req, res) {
  try {
    const doc = await Document.findById(req.params.id);

    if (!doc) {
      return res
        .status(404)
        .json({ success: false, msg: "Document not found" });
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
}

async function updateDocument(req, res) {
  try {
    const { content, title } = req.body;
    const updatedDoc = await Document.findByIdAndUpdate(
      req.params.id,
      { content, title, updatedAt: Date.now() },
      { new: true }
    );
    res
      .status(200)
      .json({ updatedDoc, msg: "Document Updated Successfully!!" });
  } catch (error) {
    res.status(500).json({ error: err.message, success: false });
  }
}

async function deleteDocument(req, res) {
  try {
    await Document.findByIdAndDelete(req.params.id);
    res.json({ message: "Document deleted", success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function getRecentDocs(req, res) {
  try {
    const userId = req.userId;

    console.log(userId);

    const recentDocs = await Document.find({
      $or: [{ author: userId }, { "collaborators.userId": userId }],
    })
      .sort({ updated: -1 })
      .limit(10);

      console.log(recentDocs);

    res.status(200).json(recentDocs);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}

module.exports = {
  createNewDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  getRecentDocs,
};
