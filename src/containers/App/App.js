import React, { Fragment, useEffect } from 'react';
import { usersRequested } from '@app/actions/users/users';
import { Routes } from '@app/routes';
import { connect } from 'react-redux';
import { signOutUser } from '@app/actions';
import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';

const App = ({ isSignedIn, signOutUser, getUsers }) => {
  useEffect(
		() => { 
    getUsers({
      results: 50
    })
		},
		[getUsers]
  )
  
	return (
		<Fragment>
			<Header isAuthenticated={isSignedIn} signOutUser={signOutUser} />
			<main className="container">
				<Routes />
			</main>
			<Footer />
		</Fragment>
	);
};

const mapStateToProps = ({ userAccount }) => ({
	isSignedIn: userAccount.signedIn
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
  getUsers: (params) => dispatch(usersRequested(params)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
