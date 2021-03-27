import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import './UserView.scss';

const UserView = ({ user }) => {
  const { login, name, email, picture } = user
	return (
		<div className="user-list-row">
      <div className="d-flex">
        <img className="rounded-circle" src={picture.thumbnail} alt={name.first}/>
        <div className="pl-2">
          <Link to={`/profile/${login.username}`}>
            <h6 className="mb-0">{`${name.title} ${name.first} ${name.last}`}</h6>
          </Link>
          <small>{email}</small>
        </div>
      </div>
		</div>
	);
};

UserView.propTypes = {
	user: PropTypes.object.isRequired
};

export { UserView };
