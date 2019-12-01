import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  // constructor(props){
  //   super(props)

  // }

  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    // console.log(this.props); //passs the function to dispatch
    // console.log(this.props.songs);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

//whwenevr state is updated it is caleed
const mapStateToProps /*any name can be taken here this is by convention*/ = state => {
  //console.log(state);
  //console.log(state.songs); //props inside in our component
  return { songs: state.songs };
};

export default connect(
  //always pass actionCreator in connect
  /*automatically wraps actionCreator function to dispatch function */
  mapStateToProps,
  { selectSong: selectSong } /*actionCreator object*/
)(SongList);
