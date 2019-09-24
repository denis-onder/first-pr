const express = require("express");
const router = express.Router();
const Issue = require("../../models/Issue");
const validateIssue = require("../../validation/validateIssue");

// Get all issues
router.get("/", async (req, res) => {
  const issues = await Issue.find()
    .limit(15)
    .sort({ date: -1 });
  issues.length > 0
    ? res.status(200).json(issues)
    : res.status(404).json({ error: "No issues found." });
});

// Post a new issue
router.post("/", async (req, res) => {
  const errors = validateIssue(req.body);
  if (errors) {
    return res.status(500).json(errors);
  }
  const newIssue = new Issue({
    user: req.body.user,
    link: req.body.link,
    description: req.body.description
  });
  await newIssue.save();
  res.status(200).json(newIssue);
});

module.exports = router;
