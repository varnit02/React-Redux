import React, { Component } from "react";
import Panel from "./Panel";
import Display from "./Display";

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      isDateVisible: true
    };
  }
  componentDidMount() {
    this.startTime();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  startTime = () => {
    this.timer = setInterval(() => {
      this.setState(() => ({ date: new Date() }));
    }, 1000);
  };
  toggleDate = () => {
    this.setState(prevState => ({ isDateVisible: !prevState.isDateVisible }));
  };
  render() {
    return (
      <div>
        <Panel toggleDate={this.toggleDate} dateOn={this.state.isDateVisible} />
        <Display
          date={this.state.date}
          isDateVisible={this.state.isDateVisible}
        />
      </div>
    );
  }
}
