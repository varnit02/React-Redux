import _ from "lodash";
import jsonplaceholder from "../api/jsonplaceholder";

export const fetchPostAndUsers = () => async (dispatch, getState) => {
  //console.log("about to fetch");
  await dispatch(fetchPosts());

  // 2nd method
  //console.log(_.map(getState().posts, "userId"));
  //const userIds = _.uniq(_.map(getState().posts, "userId"));
  //console.log(userIds);
  //userIds.forEach(id => dispatch(fetchUser(id)));
  //console.log("fetched posts");

  //3rd method
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonplaceholder.get("/posts");
  // return {
  //   type: "FETCH_POSTS",
  //   payload: promise
  // };
  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  //function returning a function which is calling a function
  //console.log(id);
  const response = await jsonplaceholder.get(`/users/${id}`);
  //console.log(response);
  dispatch({ type: "FETCH_USER", payload: response.data });
};

//1st method
// export const fetchUser = id => dispatch => _fetchUser(id, dispatch); //function returning a function which is calling a function
// //only fetch user once
// const _fetchUser /*private function*/ = _.memoize(async (id, dispatch) => {
//   //console.log(id);
//   const response = await jsonplaceholder.get(`/users/${id}`);
//   //console.log(response);
//   dispatch({ type: "FETCH_USER", payload: response.data });
// });
