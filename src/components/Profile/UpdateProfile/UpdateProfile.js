import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { TextField, Button } from '@app/components/UI';

const UpdateProfile = ({ user, updateProfile, cancelEditing }) => {
	const [ currentUser, setCurrentUser ] = useState(user);

	const handleChange = (e) => {
    const { name, value } = e.target;
		setCurrentUser((user) => ({ ...user, name: {...user.name, [name]: value }, [name]: value }));
	};

	const updateClicked = (e) => {
		updateProfile(currentUser);
	};

	return (
		<div className="w-50">
			<TextField
				label="First Name"
				name="first"
				type="text"
				onChange={handleChange}
				value={currentUser.name.first}
				className="input"
			/>
			<TextField
				label="Last Name"
				name="last"
				onChange={handleChange}
				type="text"
				value={currentUser.name.last}
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

UpdateProfile.propTypes = {
	cancelEditing: PropTypes.func,
	updateProfile: PropTypes.func,
	user: PropTypes.object.isRequired
};

export { UpdateProfile };
