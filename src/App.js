import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {
  
  handleClick = evt =>{
    console.log("hello")
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Button</button>
      </div>
    );
  }
}

export default App;
