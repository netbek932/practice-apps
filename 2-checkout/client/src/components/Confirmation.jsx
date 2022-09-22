import React from 'react';
import ReactDOM from 'react-dom';

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e) {
    this.props.purchase();
  }

  render () {
    return (
      <div>
      <h2>Order Summary</h2>
      <h3>Account Information:</h3>
      <p>{this.props.f1.name}</p>
      <p>{this.props.f1.email}</p>
      <p>{this.props.f1.password}</p>
      <h3>Shipping Information:</h3>
      <p>{this.props.f2.address1}</p>
      <p>{this.props.f2.address2}</p>
      <p>{this.props.f2.city}</p>
      <p>{this.props.f2.state}</p>
      <p>{this.props.f2.zip}</p>
      <p>{this.props.f2.phone}</p>
      <h3>Billing Information:</h3>
      <p>{this.props.f3.creditCard}</p>
      <p>{this.props.f3.expirationDate}</p>
      <p>{this.props.f3.cvv}</p>
      <p>{this.props.f3.billingZip}</p>
      <input type="button" value="Purchase" onClick={this.handleClick}/>
      </div>
    )
  }
}

export default Confirmation;