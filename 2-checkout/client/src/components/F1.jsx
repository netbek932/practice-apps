import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');

class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      existingCookie: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, field) {
    e.preventDefault();
    this.setState({ [field]: e.target.value});
  }

  handleSubmit() {
    axios.get('/customers')
    .then((result) => {
      if (result.data.length > 0) {
        this.setState({ existingCookie: true })
      } else {
        this.setState({ existingCookie: false })
      }
    })
    .then((newstate) => {
      console.log(this.state.existingCookie)
      this.state.existingCookie
      ? alert('You have already submitted a form')
      : this.props.next(this.state, 'showF1', 'showF2', 'F1')
    })
    .catch(err => console.log(err))
  }

  render () {
    return (
      <div id="f1">
      <form>
        <h2>Account Creation</h2>
        <p>Name:</p>
        <input type="text" onChange={(e)=>this.handleChange(e, "name")} />
        <p>Email:</p>
        <input type="text" onChange={(e)=>this.handleChange(e, "email")}/>
        <p>Password:</p>
        <input type="text" onChange={(e)=>this.handleChange(e, "password")}/>
        <input type="button" value="Next" onClick={this.handleSubmit}/>
      </form>
      </div>
    )
  }
}

export default F1;