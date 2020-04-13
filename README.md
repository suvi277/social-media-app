# React & Redux App

A small and simple social media example app, demonstrating how to use react and redux for building webapps. To save time for setting up the styles, the app is built with bootstrap, to make use of base styles.

## Getting started
To get the frontend running locally:

### `Running Locally`
```
git clone git@github.com:suvi277/social-media-app.git
cd social-media-app
**yarn install** - starts the local server (this project uses create-react-app)
**yarn start** starts the local server (this project uses create-react-app)
```

Open the app in your browser of choice at http://localhost:3000.

### Authentication details

Please use below example credential to **sign in** or else you can choose to **sign up** and create a user creds. But since this app doesn't consume any API or implements localstorage tp stpre data, so it wont be last when session ends.

```
**email:** 'suvi@example.com',
**password:** 'suvi@123'
```

#### `yarn test`

Launches the test runner in the interactive watch mode.

#### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

## Functionality overview

This project is not consuming API instead uses the mockData to get the users detail stored in a path
 `src/reducers/mockData/users`

- Authenticate users checks creds from mockData (sign/signup pages + signout link on navbar after signed in)
- Home page which display the active user profile info and list of users with search text field
- Search users by users first name, last name and email
- On click of user's name (including active user) navigates to Profile page (/profile/:1d) to view their profile
- Edit Button is visible on profile page for active user
- On click of edit, user can update their details.
- The App is Responsive
- Added Unit testing

## Improvement Points
This section explains what was missed while developing and could be implemented further but couldn't due to lack of time

- localStorage implemenation for signIn/SignUp
- Validation/Error handling on forms
- Adding JSDocs & .eslintrc
- More test coverage