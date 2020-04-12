import React, { Fragment } from 'react';
import { Routes } from '@app/routes';
import { connect } from 'react-redux';
import { signOutUser } from '@app/actions';
import { Footer } from '@app/components/Footer';
import { Header } from '@app/components/Header';

const App = ({ isSignedIn, signOutUser }) => {
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
	signOutUser: () => dispatch(signOutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
