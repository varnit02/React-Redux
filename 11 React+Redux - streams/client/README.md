This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

OBS 1
|
OBS 2 ---Video Stream + Stream Key--->RTMP SERVER---Video Feed---->Viewers Browsers
|  
|
OBS N

Api -> Web server that knows which streams are current broadcasting
OBS -> Open broadcast software
RTMP -> Real Time Messaging Protocol

Index page---->stream page----signed in--->loggedin index page--->Create,edit and delete a stream

#App challenges#
Need to be able to navigate around to separate pages in our app
Need to allow a user to login/logout
Need to handle forms in redux
Need to master the CRUD(Create Read Update Destroy) operations in react/redux
Errors will likely occur! Need good error handling

#React Router#

history object(keeps track of path in browser)----->BrowserRouter(listen to 'history for change')----->different paths to components

No anchor tags with react router

_Using Oauth2 of google for authentications_

#Redux Form#

1. Redux Store(redux Form Reducer) ----Redux form MapStateToProps----> props ---->Dom
2. Dom---->handler---->Redux form ActionCreator

_Redux form does this automatically_

##Steps for setting up Oauth2

1. Create a new project at console.developers.google.com
2. Setup an Oauth confirmation screen
3. Generate a client ID
4. install Googles API library,initialize itwith OAUTH CLient ID
5. Make Sure the lib gats called any time the user clicks on Login with google 'button'

#Redux design#
_Action Creators_

- ChangeAuth() ----->AuthState
- trySignin()------>GAPI Auth2
- trySignOut()------>GAPI Auth2

_Google Auth Components_

- onSignInClick()----->trySignin()
- onSignOutClick()----->trySignOut()

_ReduxStore_

- Authstate

- GapiAuth2---->changeAuth

#Rest Methods#
Standadiazed methods methods with route to do different operation
**to make easy work**  
GET->List all records
POST->Create record
PUT->Update all properties of record
PATCH->update some properties of record
DELETE->Delete a record

##Data Return##

Action Method Route Response
ListA All Records GET /streams Array of Records
get aone particular record GET /streams/:id Single record
Create record POST /streams Single record
update a record PUT /streams/:id Single record
Delete a record DELETE /streams/:id Nothing

_React cross origin error -->check for typo of component name in everywhere_

_intentional navigation-> when user click and do naviagtion_
_programatic naviagtion-> when app forcbly navigate sthrough the app_

`with react router isolation of components os important so that we can directly go to any page`

#stacking context#
