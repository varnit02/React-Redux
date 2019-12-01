import { combineReducers } from "redux";

const songsReducer = () => {
  //stateProperty 1
  return [
    {
      title: "No scrubs",
      duration: "4:05"
    },
    {
      title: "one love",
      duration: "3:00"
    },
    {
      title: "Believer",
      duration: "2:10"
    }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  //stateProperty 2
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
