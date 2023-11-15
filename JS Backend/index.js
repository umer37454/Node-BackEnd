const express = require('express');
require('dotenv').config();
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Introduction/index.html'));
})

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'Introduction/about.html'));
})

app.get('/getData', (req, res) => {
  res.send(
    {
      name: "John",
      fullName: "Doe"
    }
  );
})

app.listen(port);
console.log(`Server started at port ${port}`);
console.log(__dirname);
console.log(__filename);