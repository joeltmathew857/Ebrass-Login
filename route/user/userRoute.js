const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello i am router");
});
router.get("/user", (req, res) => {
  res.send("hello i am joel");
});

module.exports = router;
