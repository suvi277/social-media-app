# React & Redux App

A small and simple social media example app, demonstrating how to use react and redux for building webapps. To save time for setting up the styles, the app is built with bootstrap, to make use of base styles.

## Getting started

You can view a live demo over at https://suvi277.github.io/social-media-app/

To get the frontend running locally:

- Clone this repo
- `yarn install` installs all req'd dependencies
- `yarn start` starts the local server (this project uses create-react-app)
- `yarn test` Launches the test runner in the interactive watch mode
- `yarn deploy` deploys the app to github page


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

## Missing Points
This section explains what was missed while developing and could be implemented further but couldn't due to lack of time

- localStorage implemenation for signIn/SignUp
- Error handling on form
- Adding PropTypes
- More test coverage
- Adding JSDocs
- Adding .eslintrc