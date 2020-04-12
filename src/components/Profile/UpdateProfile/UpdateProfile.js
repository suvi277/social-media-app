import React, { useState } from 'react';
import { TextField, Button } from '@app/components/UI';

const UpdateProfile = ({ id, firstName, lastName, email, updateProfile, cancelEditing }) => {
	const [ currentUser, setCurrentUser ] = useState({
		id,
		firstName,
		lastName,
		email
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCurrentUser((user) => ({ ...user, [name]: value }));
	};

	const updateClicked = (e) => {
		updateProfile(currentUser);
	};

	return (
		<div className="w-50">
			<TextField
				label="First Name"
				name="firstName"
				type="text"
				onChange={handleChange}
				value={currentUser.firstName}
				className="input"
			/>
			<TextField
				label="Last Name"
				name="lastName"
				onChange={handleChange}
				type="text"
				value={currentUser.lastName}
				className="input"
			/>
			<TextField
				label="Email"
				onChange={handleChange}
				name="email"
				type="email"
				value={currentUser.email}
				className="input"
			/>
			<Button type="button" label="Update" className="btn-primary mr-3" buttonClicked={updateClicked} />
			<Button type="button" label="Cancel" className="btn-outline-primary" buttonClicked={cancelEditing} />
		</div>
	);
};

export { UpdateProfile };
