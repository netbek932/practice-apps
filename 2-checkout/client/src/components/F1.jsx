import React from 'react';
import ReactDOM from 'react-dom';


class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      submitDisabled: true
    }
    this.handleChange = this.handleChange.bind(this);
   // this.nextForm = this.nextForm.bind(this);
  }

  handleChange(e, field) {
    e.preventDefault();
    this.setState({ [field]: e.target.value, submitDisabled: false});
  }

  handleSubmit() {
    //axios post with state
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
        <button type="button" disabled={this.state.submitDisabled}>Next</button>
      </form>
      </div>
    )
  }
}

export default F1;