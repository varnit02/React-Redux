import React from "react";
import unsplash from "../api/unsplash";

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  /*async*/ onSearchSubmit = async term => {
    // axios.get('URL path',{object})
    const response = await unsplash.get("/search/photos", {
      params: { query: term }
    });
    // .then(response => {
    //   console.log(response.data.results);
    // });
    //setState is asynchronous
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <h1>Made by Varnit</h1>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
        <ImageList images={this.state.images} />
      </div>
    );
  }
}
export default App;
