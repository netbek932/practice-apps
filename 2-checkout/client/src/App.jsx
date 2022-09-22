import React from 'react';
import ReactDOM from 'react-dom';
import F1 from './components/F1.jsx';
import F2 from './components/F2.jsx';
import F3 from './components/F3.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInit: true,
      showF1: false,
      showF2: false,
      showF3: false,
      showSummary: false,
      customer: {
        name: '',
        email: '',
        password: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        creditCard: '',
        expirationDate: '',
        cvv: '',
        billingZip: ''
      }
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick (e, field) {
    this.setState({
      showInit: false,
      [field]: true
    })
  }

  handleSubmit(inputData, currentField, nextField) {
    axios.post('/customers', {data: inputData})
    .then((result) => {
      console.log('Success', currentField, nextField);
      this.setState({
        [currentField]: false,
        [nextField]: true
      })
    })
    .catch((err) => console.log(err))
  }


  render () {
    return (
      <div className="App">
        <p>Welcome to checkout!</p>
        {/* <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code> */}
        <button onClick={(e) => this.handleClick(e, 'showF1')}>Checkout</button>
        {this.state.showF1 ? <F1 next={this.handleSubmit}/> : ''}
        {this.state.showF2 ? <F2 next={this.handleSubmit}/> : ''}
        {this.state.showF3 ? <F3 next={this.handleSubmit}/> : ''}
      </div>
    )
  }
}

export default App;