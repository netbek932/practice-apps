require("dotenv").config();
const express = require('express');
let app = express();
let port = 1127;
const { saveMany } = require('../database/db');
const { get } = require('../database/db');
const { saveOne } = require('../database/db');
const { deleteEntry } = require('../database/db');
const { editEntry } = require('../database/db');
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
    var seed = req.body.data.seedDataEntries;
    saveMany(seed)
  .then(result => res.end())
  .catch(err => console.log('Could not post'))
})

app.post('/glossary', function(req, res) {
    var entry = req.body.data;
    saveOne(entry)
})

app.post('/deleted', function(req, res) {
  var id = req.body.data;
  deleteEntry(id)
  .then(result => res.end())
  .catch(err => console.log(err))
})

app.post('/edits', function(req, res) {
  console.log('IN EDIT POSTINGG', req.body)
  var edit = req.body;
  editEntry(edit)
  .then(result => res.end())
  .catch(err => console.log(err))
})

app.listen(port, () => {
  console.log(`Listening on port ${port} :)`)
})