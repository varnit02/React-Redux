import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from "./constants.js";

const initialState = {
  searchField: ""
};

//reeducer-pure function
export const searchRobots = (state = initialState, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload }; //or  return Object.assign({},state,{searchField:action.payload});
    default:
      return state;
  }
};

const initialStateRobots = {
  isPending: false,
  robots: [],
  error: ""
};

export const requestRobots = (state = initialStateRobots, action = {}) => {
  console.log(action.type);
  switch (action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, isPending: true }; // or Object.assign({},state,{isPendin:true})

    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: action.payload, isPending: false };

    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: action.payload, isPending: false };

    default:
      return state;
  }
};
