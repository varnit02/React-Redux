import React from "react";
import Header from "./Header";
import Movies from "./Movie/Movies";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { title: "react movie App" };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Movies />
        </div>
      </div>
    );
  }
}
