const express = require('express');
const app =  express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get('/api/test', (req, res) => {
  res.json({
    id: 'Random ID',
    username: 'Username',
    link: 'Link'
  });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));