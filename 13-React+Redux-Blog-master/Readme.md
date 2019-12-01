#redux -->The Redux library
#react-recux --->integration layer between react and redux
#axios-->helps us make redux request
#redux-thunk-->Middleware to help us make request sina a redux application.

1. Components gets rendered onscreen

2. Components 'ComponentDidMount' did lifecycle method gets called.

3. we call action creator from 'componentDidMount'

4. Action creator runs code to make an Api request

5. Api resonds with data

6. Action creator returns an 'action' with the fetched data on the 'payload' Property

7. Some reducers sees the action returns the data off the 'payload'

8.Becayuse we generated osme new state object, redux /react-redux cause our React app to be rerendered.

_Components are generelly responsible for fetching data the need by calling an action creator_

_Action creator are responsible for api requests_

_This is where redux thunk comes to play_

_We get fteched data into a component by generating new state in our redux store ,then getting that into our component through mapStateToProps._

**Actions must return plain objects with a type property**

> Redux-Thunk is used to solve async issues

##Middleware in redux

1. Function that gets called with every action we dispatch.

2. Has ability to stop,modify otr otherwise mess around with actions.

3. Tons of open source middleware exist.

4. Most popular use of middleware is for dealing with async actions.

5. We are going to use a middleware called redux-thunk to solve our async issues.

#Rules for Redux thunk

**using thunk middleware we can return functions in action creators**

- Action creators can return action objects or functions.
- If an action object gets returned,it must have a type.
- if an action object gets returned,it can optionally have a payload.

#Rules of reducers

- Must return value besides undefined.
- Produces 'state' or data to be used inside of your app using only previous state and the action.
- Must not return reachout of 'itself' to decide what value to return (reducers are pure).
- for begginers -> Must not mutate its inpur 'state' argument.
  > if you return state as it is from reducer then no updations will done in app.

PreviousState,Action
|
Reducer----Bad---->Api request
|
NewState

#lodash(\_.)

memoize-> \_.memoize() call made only once,memorize the output.
map->\_.map() to iterate over list.
unique->\_.uniq() to show repeated elements only once or finding unique ids.
chain->\_.chain(). to chain the argument to other methods.
#fetchPostsAndUsers()

1. Call 'fetchPosts'
2. Get list of Posts
3. Find all unique userId's from list of posts
4. Iterate over unique userId's
5. Call 'fetchUser' with each userId
