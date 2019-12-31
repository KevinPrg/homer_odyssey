const express = require("express");
const router = express.Router();
const connection = require("../helpers/db.js");

router.post("/signup", function(req, res, next) {
  const form = req.body;
  connection.query("INSERT INTO users SET ?", form, function(
    error,
    results,
    fields
  ) {
    if (error) res.status(500).end();
    res.end();
  });
});

module.exports = router;
