const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Issue = require('../../models/Issue');
const Validator = require('validator');

// Get all issues
router.get('/', (req, res) => {
  Issue.find().limit(15).sort({date: -1})
    .then(issues => res.json(issues))
    .catch(err => res.json(err));
});

// Post a new issue
router.post('/', (req, res) => {
  let errors = {}
  if (Validator.isEmpty(req.body.user)) {
    errors.user = 'User Field must be filled out.';
  }
  if (Validator.isEmpty(req.body.description)) {
    errors.description = 'Description Field must be filled out.';
  }
  if (Validator.isEmpty(req.body.link)) {
    errors.link = 'URL Field must be filled out.';
  }
  if (!Validator.isURL(req.body.link)) {
    errors.link = 'The Link must be a valid URL.';
  }
  if (!req.body.link.includes('github.com')) {
    errors.link = 'The Link must be a valid GitHub URL.';
  }
  if (errors.user || errors.link || errors.description) {
    res.status(400).json(errors);
  } else {
    const newIssue = new Issue({
      user: req.body.user,
      link: req.body.link,
      description: req.body.description
    });
    newIssue.save()
      .then(post => res.json(post))
      .catch(err => res.json(err));
  }
});

module.exports = router;
