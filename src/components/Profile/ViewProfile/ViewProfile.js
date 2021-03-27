import PropTypes from 'prop-types';
import React from 'react';

const ViewProfile = ({ user, children }) => {
  const { name, email, picture, gender } = user
  const dob = new Date(user?.dob?.date).toLocaleDateString()
  const register = new Date(user?.registered?.date).toLocaleDateString()

	return (
    <div className="mt-4">
      <img src={picture?.large} alt="profile"/>
      <div className="pt-4">
        <h4>{`${name?.title} ${name?.first} ${name?.last}`}</h4>
        <div><strong>Email:</strong>&nbsp;{email}</div>
        <div><strong>Gender:</strong>&nbsp;{gender}</div>
        <div><strong>Date of Birth:</strong>&nbsp;{dob}</div>
        <div><strong>Registered at:</strong>&nbsp;{register}</div>
      </div>
			{children}
		</div>
	);
};

ViewProfile.propTypes = {
	children: PropTypes.any,
	user: PropTypes.object.isRequired
};

export { ViewProfile };
