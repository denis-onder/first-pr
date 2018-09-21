const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const port = process.env.PORT || 8000;
const issues = require('./routes/api/issues');

// BodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Database
mongoose.connect(db, {useNewUrlParser: true})
  .then(() => console.log('MongoDB Connected.'))
  .catch(err => console.log(err));

// Test Route
app.get('/test', (req, res) => {
  res.json({
    id: 'Random ID',
    username: 'Username',
    link: 'Link'
  });
});

// Router
app.use('/api/issues', issues);

// Server
app.listen(port, () => console.log(`Server is running on port: ${port}.`));