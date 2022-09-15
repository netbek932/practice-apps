import React from 'react';
import ReactDOM from 'react-dom';

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      definition: ''
    }
    this.handleWordChange = this.handleWordChange.bind(this);
    this.handleDefinitionChange = this.handleDefinitionChange.bind(this);
    this.add = this.add.bind(this);
  }

  handleWordChange(e) {
    e.preventDefault();
    this.setState({word: e.target.value});
  }

  handleDefinitionChange(e) {
    e.preventDefault();
    this.setState({definition: e.target.value});
  }

  add () {
    var entry = {
      word: this.state.word,
      definition: this.state.definition
    };
    this.props.post(entry);
  }

  render () {
    return (
      <div>
      <label>
          Word:
          <input type="text" name="word" onChange={this.handleWordChange}/>
          Definition:
          <input type="text" name="definition" onChange={this.handleDefinitionChange}/>
        </label>
        <input type="submit" value="Submit" onClick={this.add}/>
        </div>
    )
  }
}

export default Entry;