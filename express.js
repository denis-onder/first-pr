const express = require('express');
const app =  express();

const port = process.env.PORT || 5000;

app.get('/api/requests', (req, res) => {
  res.send().json({
    id: 'Random ID',
    username: 'Username',
    link: 'Link'
  });
});

app.listen(port, () => console.log(`Server is running on port: ${port}`));