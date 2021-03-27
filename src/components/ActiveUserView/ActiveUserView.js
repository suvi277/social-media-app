import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import image from './profile.png';

const ActiveUserView = ({ user }) => {
  const { login, name, email } = user
	return (
		<div className="pb-3 d-flex">
			<img width={100} height={100} src={image} alt="profile" title="profile image" />
			<div className="px-3 py-2">
          <Link to={`/profile/${login.username}`}>
            <h6 className="mb-0">{`${name.title} ${name.first} ${name.last}`}</h6>
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
