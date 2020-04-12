import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signInUser } from '@app/actions';
import { AuthForm, TextField, Button } from '@app/components/UI';

const SignIn = ({ isSignedIn, signInUser, users }) => {
	const initialField = {
		email: '',
		password: ''
	};
	const [ fields, setFields ] = useState(initialField);
	const { email, password } = fields;

	const handleChange = (e) => {
		// Update the input fields changes
		const { name, value } = e.target;
		setFields((fields) => ({ ...fields, [name]: value }));
	};

	const submitForm = (e) => {
		e.preventDefault();
		if (email && password) {
			signInUser(email, password, users);
			// Reset Fields
			setFields(initialField);
		}
	};

	return (
		<div className="center-form">
			{isSignedIn ? (
				// These could be created separated component
				<p>Already Signed In</p>
			) : (
				<AuthForm title="Please Sign In">
					<form onSubmit={submitForm}>
						<TextField
							label="Email"
							name="email"
							type="email"
							value={email}
							onChange={handleChange}
							placeholder="Enter email..."
							required
							className="input"
						/>
						<TextField
							label="Password"
							name="password"
							type="password"
							value={password}
							onChange={handleChange}
							placeholder="Enter password..."
							required
							className="input"
						/>
						<div className="pt-3">
							<Button type="submit" label="Sign In" className="btn-primary mr-3" />
							<Link to="sign-up" className="btn rounded btn-outline-primary">
								Sign Up
							</Link>
						</div>
					</form>
				</AuthForm>
			)}
		</div>
	);
};

const mapStateToProps = ({ userAccount, userProfiles }) => ({
	isSignedIn: userAccount.signedIn,
	users: userProfiles.users
});

const mapDispatchToProps = (dispatch) => ({
	signInUser: (email, password, users) => dispatch(signInUser(email, password, users))
});

// - Connect component to redux store
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
