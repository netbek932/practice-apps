require("dotenv").config();
const express = require('express');
const app = express();
let port = 1127;

app.listen(port, () => {
  console.log(`Listening on port ${port} :)`)
})