import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, isSignedIn, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			isSignedIn === true ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: '/sign-in', state: { from: props.location } }} />
			)}
	/>
);

const mapStateToProps = (state) => ({
	isSignedIn: state.userAccount.signedIn
});

export default connect(mapStateToProps)(AuthRoute);
