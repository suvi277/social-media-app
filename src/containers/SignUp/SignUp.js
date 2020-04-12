import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUpUser } from '@app/actions';
import { AuthForm, TextField, Button } from '@app/components/UI';

const SignUp = ({ signUpUser }) => {
	const initialUser = {
		firstName: '',
		lastName: '',
		email: '',
		password: ''
	};
	const [ user, setUser ] = useState(initialUser);
	const handleChange = (e) => {
		// set the changed input user details
		const { name, value } = e.target;
		setUser((user) => ({ ...user, [name]: value }));
	};

	const submitForm = (e) => {
		e.preventDefault();

		if (user.firstName && user.lastName && user.email && user.password) {
			signUpUser(user);
			// reset the user details
			setUser(initialUser);
		}
	};
	return (
		<div className="col-12">
			<AuthForm title="Sign Up">
				<form name="form" onSubmit={submitForm}>
					<TextField
						label="First Name"
						name="firstName"
						type="text"
						value={user.firstName}
						onChange={handleChange}
						placeholder="Enter First Name"
						required
						className="input"
					/>
					<TextField
						label="Last Name"
						name="lastName"
						type="text"
						value={user.lastName}
						onChange={handleChange}
						placeholder="Enter Last Name"
						required
						className="input"
					/>
					<TextField
						label="Email"
						name="email"
						type="email"
						value={user.email}
						onChange={handleChange}
						placeholder="Enter email..."
						required
						className="input"
					/>
					<TextField
						label="Password"
						name="password"
						type="password"
						value={user.password}
						onChange={handleChange}
						placeholder="Enter password..."
						required
						className="input"
					/>
					<Button type="submit" label="Sign Up" className="btn-primary mr-3" />
					<Link to="sign-in">
						<Button type="button" label="Cancel" className="btn-secondary" />
					</Link>
				</form>
			</AuthForm>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isSignedIn: state.userAccount.signedIn
});

const mapDispatchToProps = (dispatch) => {
	return {
		signUpUser: (user) => dispatch(signUpUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
