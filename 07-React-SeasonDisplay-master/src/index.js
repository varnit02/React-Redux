import React from "react";
import ReactDOM from "react-dom";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./Display.css";

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   //only once direct assignment to state is possible
  //   this.state = { lat: null, errorMessage: "" }; //state object
  //   //whenever we have ti initialize number we initialize by null
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // console.log("My Component was just Mounted");
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      // no direct assignment to state
      err => this.setState({ errorMessage: err.message })
    );
  }

  // componentDidUpdate() {
  //   console.log("My Component was just Updated");
  // }
  //dont initiailze method the in the render method because it is called again and again
  //React says we have to render to define render!!

  renderContent() {
    const { lat, errorMessage } = this.state;
    console.log(this.state);
    if (errorMessage && !lat) {
      return (
        <div className="error-display">
          <i className="icon-left massive times  icon" />
          <h1>Error:{errorMessage}</h1>
          <i className="icon-right massive times  icon" />
        </div>
      );
    }
    if (!errorMessage && lat) {
      return <SeasonDisplay lat={lat} />;
    }
    return <Spinner message="Please allow Location" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
