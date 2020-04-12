import React from 'react';
import { Link } from 'react-router-dom';
import './UserView.scss';

const UserView = ({ email, firstName, lastName, id }) => {
	return (
		<div className="user-list-row">
			<Link to={`/profile/${id}`}>
				<h5>{`${firstName} ${lastName}`}</h5>
			</Link>
			<span className="small">{email}</span>
		</div>
	);
};

export { UserView };
