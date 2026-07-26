import React, { Component } from 'react';
import CurrencyConvertor from './components/CurrencyConvertor';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 5,
    };

    // Binding 'this' so it refers to the class instance inside these methods
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleIncrement() {
    this.setState({ counter: this.state.counter + 1 });
    alert('Hello Member!');
  }

  handleDecrement() {
    this.setState({ counter: this.state.counter - 1 });
  }

  sayWelcome(message) {
    alert(message);
  }

  handlePress(event) {
    // event here is React's SyntheticEvent, not the raw browser event
    alert('I was clicked');
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        <button onClick={this.handlePress}>Click on me</button>

        <h2 style={{ color: 'green' }}>Currency Convertor!!!</h2>
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;