import React from "react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default class Greeting extends React.Component {
  constructor() {
    super();
    this.state = { isLoggedIn: true };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogoutClick = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    return !isLoggedIn ? (
      <div>
        <h1>Welcome back!</h1>
        <LogoutButton onClick={this.handleLogoutClick} />
      </div>
    ) : (
      <div>
        <h1>Please sign up.</h1>
        <LoginButton onClick={this.handleLoginClick} />
      </div>
    );
  }
}
