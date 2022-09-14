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
  word: {type: String, unique: true},
  definition: String
})

const saveOne = (item) => {
  var newEntry = new Entry({

  })
}

const saveMany = (items) => {
  for (var i = 0; i < items.length; i++) {
    var newEntry = new Entry({
      word: items[i].word,
      definition: items[i].definition
    })
  }
  .then(res => console.log('Seed data stored'));
  .catch(err => console.log('Seed data already saved'));
}

module.exports.saveOne = saveOne;
module.exports.saveMany = saveMany;
