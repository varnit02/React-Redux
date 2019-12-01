//automatically rendered by connect component
import React from "react";

import { connect } from "react-redux";

const SongDetail = ({ mySelectedsong }) => {
  console.log(mySelectedsong);

  if (!mySelectedsong) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h1>Details for</h1>
      <p>
        {mySelectedsong.title}
        <br />
        {mySelectedsong.duration}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { mySelectedsong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
