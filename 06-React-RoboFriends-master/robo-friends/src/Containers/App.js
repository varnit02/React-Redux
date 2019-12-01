//smart component

import React, { Component } from "react";

import { connect } from "react-redux";
import CardList from "../Components/CardList";
// import { robots } from "../robots"
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css";
import { setSearchField, requestRobots } from "../actions";

import ErrorBoundry from "../Components/ErrorBoundary";

const mapStateToProps /* variable */ = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  //const App = () => {
  // REDUX
  //constructor() {
  //   //include only prebuilt methods
  //   super();
  //   this.state = {
  //     robots: []
  //     // ,searchfield: ""
  //   };
  // }
  componentDidMount() {
    //console.log(this.props.store.getState());
    //REDUX
    //fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response => response.json())
    //   .then(users => {
    //     this.setState({ robots: users });
    //   });

    this.props.onRequestRobots();
  }
  //  Redux
  // onSearchChange = event => {
  //   this.setState({ searchfield: event.target.value });
  // };
  render() {
    //include only prebuilt methods
    //const { robots /*,searchfield*/ } = this.state; //destructuring
    const { searchField, onSearchChange, robots } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1>LOADING</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robofriends</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  /*connect() -> higher order function function returning other functions */ App
);
