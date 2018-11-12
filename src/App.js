import React, { Component } from "react";
import "./App.css";
import { Button, Avatar, CardMedia, Card, Typography } from "@material-ui/core";

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
    this.setState(state => ({
      user: user,
      followers: followers,
      active: !state.active
    }));
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleClick} color="primary" variant="contained">
          Toggle User
        </Button>
        {this.state.active && (
          <Card className="card">
            <img
              className="profilePic"
              src={this.state.user.avatar_url}
              key={this.state.user.id}
            />
            <br />
            <span>{this.state.user.name}</span>
            <br />
            <span>{this.state.user.location}</span>
            <br />
            <span>{this.state.user.bio}</span>
            <h3>Followers</h3>
            <div id="followers" className="followers">
              {this.state.followers.map(follower => (
                <CardMedia>
                  <Avatar
                    src={follower.avatar_url}
                    key={follower.id}
                    alt={follower.name}
                  />
                  <p className="followerLogin">{follower.login}</p>
                </CardMedia>
              ))}
            </div>
          </Card>
        )}
      </div>
    );
  }
}

export default App;
