import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    user: {},
    followers: {},
    active: false
  };

  handleClick = async event => {
    let user = await fetch("https://api.github.com/users/jayaimzzz");
    user = await user.json();
    let followers = await fetch(user.followers_url);
    followers = await followers.json();
    console.log(followers);
    this.setState(state => ({
      user: user,
      followers: followers,
      active: !state.active
    }));
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Button</button>
        {this.state.active && (
          <div>
            <img src={this.state.user.avatar_url} key={this.state.user.id} />
            <span>{this.state.user.name}</span>
            <br/>
            <span>{this.state.user.location}</span>
            <br/>
            <span>{this.state.user.bio}</span>
            <div id="followers">
              <h3>Followers</h3>
              {this.state.followers.map(follower => (
                <div>
                  <img src={follower.avatar_url} key={follower.id} />
                  <p>{follower.login}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
