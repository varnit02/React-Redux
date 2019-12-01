import React from "react";

class SearchBar extends React.Component {
  // constructor(){
  //   super();
  // }

  state = { term: "" };

  onFormSubmit = event => {
    //binding this
    //{(event) => this.onFormSubmit(event)}
    /*2*/
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search:</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) /*1*/ => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
