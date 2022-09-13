require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/glossary',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const Entry = mongoose.model('Entry', glossarySchema);

const glossarySchema = new mongoose.Schema({
  word: String,
  definition: String
})

const save = (item) => {

}

module.exports.save = save;