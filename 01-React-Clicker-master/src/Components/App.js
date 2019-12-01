import React, { Component } from "react";
import Header from "./Header";
import Clicker from "./Clicker";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Click me"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Clicker />
        </div>
      </div>
    );
  }
}
