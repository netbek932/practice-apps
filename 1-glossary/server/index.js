require("dotenv").config();
const express = require('express');
let app = express();
let port = 1127;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));

app.get('/glossary', function(req, res) {
  res.send('Get request successful')
})

app.listen(port, () => {
  console.log(`Listening on port ${port} :)`)
})