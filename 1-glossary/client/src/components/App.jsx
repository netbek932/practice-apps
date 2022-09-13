import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: []
    }
  }



  render () {
    return (
      <div>
        <ul>{this.state.glossary.map((word) => <li>{word.name} - {word.definition}</li>)}</ul>
      </div>
    )
  }
}


export default App;