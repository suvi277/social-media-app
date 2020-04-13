import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import image from './profile.png';

const ActiveUserView = ({ user }) => {
	const { email, firstName, lastName, id } = user;
	return (
		<div className="pb-3 d-flex">
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

ActiveUserView.propTypes = {
	user: PropTypes.object.isRequired
};

export { ActiveUserView };
