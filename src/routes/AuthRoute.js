import React from 'react';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, isSignedIn, ...rest }) => {
	return (
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
};

const mapStateToProps = (state) => ({
	isSignedIn: state.userAccount.signedIn
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
