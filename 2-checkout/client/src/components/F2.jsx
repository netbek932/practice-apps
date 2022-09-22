import React from 'react';
import ReactDOM from 'react-dom';

class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, field) {
    e.preventDefault();
    this.setState({ [field]: e.target.value })
  }

  handleSubmit(data) {
    this.props.next(this.state, 'showF2', 'showF3', 'F2')
  }

  render () {
    return (
      <div id="F2">
        <form>
          <h2>Order Details</h2>
          <p>Address</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'address1')}/>
          <p>Address Cont.</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'address2')}/>
          <p>City</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'city')}/>
          <p>State</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'state')}/>
          <p>Zip</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'zip')}/>
          <p>Phone</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'phone')}/>
          <input type="button" value="Next" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default F2;