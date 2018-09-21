const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Issue = require('../../models/Issue');

router.get('/', (req, res) => {
  Issue.find()
    .then(issues => res.json(issues))
    .catch(err => res.json(err));
});

router.post('/', (req, res) => {
  const newIssue = new Issue({
    user: req.body.user,
    link: req.body.link,
  });
  newIssue.save()
    .then(post => res.json(post))
    .catch(err => res.json(err));;
});

module.exports = router;