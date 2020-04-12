import React from 'react';
import { Link } from 'react-router-dom';
import image from './profile.png';

const ActiveUserView = ({ email, firstName, lastName, id }) => {
	return (
		<div className="user-details d-flex">
			<img width={100} height={100} src={image} alt="profile" title="profile image" />
			<div className="px-3 py-2">
				<Link to={`/profile/${id}`}>
					<div className="title">{`${firstName} ${lastName}`}</div>
				</Link>
				<span className="email-id font-weight-lighter">{email}</span>
			</div>
		</div>
	);
};

export { ActiveUserView };
