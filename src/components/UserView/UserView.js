import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './UserView.scss';

const UserView = ({ user }) => {
	const { email, firstName, lastName, id } = user;
	return (
		<div className="user-list-row">
			<Link to={`/profile/${id}`}>
				<h5>{`${firstName} ${lastName}`}</h5>
			</Link>
			<span className="small">{email}</span>
		</div>
	);
};

UserView.propTypes = {
	user: PropTypes.object.isRequired
};

export { UserView };
