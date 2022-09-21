require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");
var bodyParser = require('body-parser');


// Establishes connection to the database on server start
const db = require("./db");

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true}))

/****
 *
 *
 * Other routes here....
 *
 *
 */

app.post('/customers', function(req, res) {
  var data = req.body.data;
  var values = [req.session_id, data.name, data.email, data.password, data.address1, data.address2, data.city, data.state, data.zip, data.phone, data.credit_card, data.expiration_date, data.cvv, data.billing_zip]
  var myQuery = 'INSERT INTO customers (session_id, name, email, password, address1, address2, city, state, zip, phone, credit_card, expiration_date, cvv, billing_zip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);'
  db.query(myQuery, values, function(err, result) {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log('success')
      res.send('Success')
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
