import React, { Component } from 'react';
import './App.css';




class App extends Component {
  state = {
    user:{},
    active: false
  }

  
  
  // async handleClick(event) {
  //   let user = await fetch('https://api.github.com/users/jayaimzzz');
  //   user = await user.json();
  //   console.log(user)
  //   this.setState()
  //   // console.log(this.state)
  // }
  handleClick = async (event) => {
    let user = await fetch('https://api.github.com/users/jayaimzzz');
    user = await user.json();
    this.setState({user:user})
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
