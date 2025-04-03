const express = require("express");
const { ensureAuthenticated } = require("../middlewares/auth.js");
const {
  createNewDocument,
  getDocument,
  updateDocument,
  deleteDocument,
  getRecentDocs,
  getAllDocuments,
} = require("../controllers/documentController.js");

const router = express.Router();

// EnsureAuthenticated Middleware checks if user has jwt token ie it is loggedIn and also gives userId
router.use(ensureAuthenticated);

router.post("/", createNewDocument);

router.get("/recent", getRecentDocs);

router.get("/myDocs",getAllDocuments);

router.get("/:id", getDocument);

router.put("/:id",updateDocument);

router.delete("/:id", deleteDocument);


module.exports = router;
