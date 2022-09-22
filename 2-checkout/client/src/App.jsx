import React from 'react';
import ReactDOM from 'react-dom';
import F1 from './components/F1.jsx';
import F2 from './components/F2.jsx';
import F3 from './components/F3.jsx';
import Confirmation from './components/Confirmation.jsx';
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
      existingCookie: false,
      f1: {},
      f2: {},
      f3: {}
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
  }

  handleClick (e, field) {
    this.setState({
      showInit: false,
      [field]: true
    })
  }

  handleSubmit(inputData, currentField, nextField, stateToUpdate) {
    axios.post('/customers', {data: inputData})
    .then((result) => {
      console.log('Success', currentField, nextField, inputData);
      if (stateToUpdate === 'F1') {
        this.setState({
          [currentField]: false,
          [nextField]: true,
          f1: inputData
        })
      } else if (stateToUpdate === 'F2') {
        this.setState({
          [currentField]: false,
          [nextField]: true,
          f2: inputData
        })
      } else if (stateToUpdate === 'F3') {
        this.setState({
          [currentField]: false,
          [nextField]: true,
          f3: inputData
        })
      }
    })
    .catch(err => console.log(err))
  }

  handlePurchase () {
    this.setState({
      showInit: true,
      showSummary: false
    })
  }

  render () {
    return (
      <div className="App">
        <p>Welcome to checkout!</p>
        {this.state.showInit ? <button onClick={(e) => this.handleClick(e, 'showF1')}>Checkout</button> : ''}
        {this.state.showF1 ? <F1 next={this.handleSubmit} checkCookie={this.checkCookie} /> : ''}
        {this.state.showF2 ? <F2 next={this.handleSubmit}/> : ''}
        {this.state.showF3 ? <F3 next={this.handleSubmit}/> : ''}
        {this.state.showSummary ? <Confirmation purchase={this.handlePurchase} get={this.getOrderDetails} f1={this.state.f1} f2={this.state.f2} f3={this.state.f3}/> : ''}
      </div>
    )
  }
}

export default App;