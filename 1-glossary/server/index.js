require("dotenv").config();
const express = require('express');
let app = express();
let port = 1127;
const { saveMany } = require('../database/db');
const { get } = require('../database/db');
const { saveOne } = require('../database/db');
var bodyParser = require('body-parser');


app.use(express.static(__dirname + '/../client/dist'));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())

app.get('/glossary', function(req, res) {
  get()
  .then((result) => {
    res.send(result)
  })
})

app.post('/glossary/:seeds', function(req, res) {
  console.log('IN POST ROUTE')
    var seed = req.body.data.seedDataEntries;
    saveMany(seed)
  // .then(res => console.log('Done posting!'))
  // .catch(err => console.log('Could not post'))
})

app.post('/glossary', function(req, res) {
    var entry = req.body.data;
    saveOne(entry)
})

app.listen(port, () => {
  console.log(`Listening on port ${port} :)`)
})