import React, { Component } from "react";
import Header from "./Header";
import Clock from "./Clock";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: "Clock"
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Clock />
      </div>
    );
  }
}
