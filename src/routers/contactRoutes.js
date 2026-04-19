const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllMessages,
} = require("../controllers/contactController");

router.get("/", getAllMessages);
router.post("/", sendMessage);

module.exports = router;
