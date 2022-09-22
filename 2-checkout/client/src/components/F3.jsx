import React from 'react';
import ReactDOM from 'react-dom';

class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: '',
      expirationDate: '',
      cvv: '',
      billingZip: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e, field) {
    e.preventDefault();
    this.setState({ [field]: e.target.value })
  }

  handleSubmit () {
    this.props.next(this.state, 'showF3', 'showSummary', 'F3')
  }

  render () {
    return (
      <div id="f3">
        <form>
          <h2>Payment</h2>
          <p>Credit card number</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'creditCard')}/>
          <p>Expiration date</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'expirationDate')} />
          <p>CVV</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'cvv')}/>
          <p>Billing zip code</p>
          <input type="text" onChange={(e) => this.handleChange(e, 'billingZip')}/>
          <input type="button" value="Next" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}

export default F3;