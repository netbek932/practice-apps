import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles.css'
const axios = require('axios');
import { seedData } from './seed.js';
import Entry from './components/Entry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
    this.postEntry = this.postEntry.bind(this);
  }

  componentDidMount() {
  axios.get('/glossary')
  .then((fetchedData) => {
    var fetchedEntries = fetchedData.data;
    this.setState({glossary: fetchedEntries})
  })
  .then((e) => {
    if (this.state.glossary.length === 0) {
      var seedDataEntries = seedData;
      axios.post('/glossary/:seeds', { data: {seedDataEntries} })
      .then(res => console.log('Data added to glossary'))
    }
  })
  .catch(err => console.log('could not get glossary entries'))
  }

  // conponentDidUpdate() {
  //   console.log(this.state.glossary.length )
  //   if (this.state.glossary.length === 0) {
  //     var seedDataEntries = seedData;
  //     axios.post('/glossary/:seeds', { data: {seedDataEntries} })
  //     .then(res => console.log('Data added to glossary'))
  //   }
  // }

  postEntry (entry) {
    console.log('in axios post req')
    axios.post('/glossary', {data: entry})
    .then(res => console.log(res))
  }

  render () {
    return (
      <div className="App">
        <h1>Welcome to glossary</h1>
        <ul>{this.state.glossary.map((word) => <li key={word._id}>{word.word} - {word.definition}</li>)}</ul>
        < Entry post={this.postEntry.bind(this)}/>
      </div>
    )
  }
}

export default App;