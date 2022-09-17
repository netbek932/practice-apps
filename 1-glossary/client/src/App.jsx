import React from 'react';
import ReactDOM from 'react-dom';
import '../dist/styles.css'
const axios = require('axios');
import { seedData } from './seed.js';
import Entry from './components/Entry.jsx';
import Edit from './components/Edit.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      glossary: [],
      show: false,
      clickedWordId: ''
    }
    this.postEntry = this.postEntry.bind(this);
    this.delete = this.delete.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
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
      .then(done => console.log('Data added to glossary'))
    }
  })
  .then((seeded) => {
    axios.get('/glossary')
    .then((fetchedData) => {
    var fetchedEntries = fetchedData.data;
    this.setState({glossary: fetchedEntries})
    })
  })
  .catch(err => console.log('could not get glossary entries'))
  }

  // componentDidUpdate() {
  //   axios.get('/glossary')
  //   .then((fetchedData) => {
  //   var fetchedEntries = fetchedData.data;
  //   this.setState({glossary: fetchedEntries})
  //   })
  // }

  postEntry (entry) {
    console.log('in axios post req')
    axios.post('/glossary', {data: entry})
    .then(done => console.log(res))
  }

  delete (entryId) {
    axios.post('/deleted', {data: entryId})
    .then(done => console.log('Deleted'))
    .catch(err => console.log('Error deleting'))
  }

  showModal = (id) => {
    this.setState({ show: true,  clickedWordId: id});
  };

  hideModal = () => {
    this.setState({ show: false });
  };



  render () {
    return (
      <div className="App">
        <h1>Welcome to glossary</h1>
        {this.state.glossary.map((word) =>

          <div key={word._id} > {word.word} - {word.definition}
              <button type="button" onClick={() => this.showModal(word._id)}>Edit</button>

            <button onClick={()=>this.delete(word._id)}>Delete</button>
          </div>)}
        < Edit show={this.state.show} handleClose={this.hideModal} id={this.state.clickedWordId}></Edit>
        < Entry post={this.postEntry.bind(this)}/>
      </div>
    )
  }
}

export default App;