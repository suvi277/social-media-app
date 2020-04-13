import PropTypes from 'prop-types';
import React from 'react';
import './ViewProfile.scss';

const ViewProfile = ({ user, children }) => {
	const { firstName, lastName, email } = user;
	return (
		<div className="profile-info">
			<h5>{`${firstName} ${lastName}`}</h5>
			<p>{email}</p>
			{children}
		</div>
	);
};

ViewProfile.propTypes = {
	children: PropTypes.any,
	user: PropTypes.object.isRequired
};

export { ViewProfile };
