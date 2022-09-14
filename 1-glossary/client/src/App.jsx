import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles.css'
const axios = require('axios');
import seedData from './seed.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
  }

  render () {
    return (
      <div className="App">
        <h1>Welcome to glossary</h1>
        <ul>{this.state.glossary.map((word) => <li>{word.name} - {word.definition}</li>)}</ul>
      </div>
    )
  }
}

export default App;