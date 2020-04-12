import React from 'react';
import './ViewProfile.scss';

const ViewProfile = ({ firstName, lastName, email, children }) => {
	return (
		<div className="profile-info">
			<h5>{`${firstName} ${lastName}`}</h5>
			<p>{email}</p>
			{children}
		</div>
	);
};

export { ViewProfile };
