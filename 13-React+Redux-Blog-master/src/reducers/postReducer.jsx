//state -> previous stae on rendering reducer once

export default (state = [], action) => {
  //Bad--> return document.querySelector('input')
  //Bad--> return axios.get('/post')
  //good--> return state+action
  /*
  state assignment is bad approach
  */
  //strings and numbers are immutable in JS

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;

    default:
      return state;
  }
};
