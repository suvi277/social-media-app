import React, { useEffect, useState, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from '@app/components/UI';
import { ViewProfile, UpdateProfile } from '@app/components/Profile';
import { editUser, updateProfile, cancelEditing } from '@app/actions';

const Profile = ({ users, currentUserId, activeUser, isEditing, updateProfile, cancelEditing, editUser }) => {
	const [ currentUser, setCurrentUser ] = useState({});

	useEffect(
		() => {
			// set the current user from user lists by id
			setCurrentUser(
				users.find((user) => {
					return user.id === currentUserId;
				})
			);
		},
		[ users, currentUserId ]
	);

	return (
		<Fragment>
			<h2>Profile Details</h2>
			{isEditing ? (
				<UpdateProfile {...currentUser} updateProfile={updateProfile} cancelEditing={cancelEditing} />
			) : (
				<ViewProfile {...currentUser}>
					{activeUser.id === currentUser.id && (
						<Button type="button" label="Edit Profile" className="btn-primary" buttonClicked={editUser} />
					)}
				</ViewProfile>
			)}
		</Fragment>
	);
};

const mapDispatchToProps = (dispatch) => ({
	editUser: () => dispatch(editUser()),
	cancelEditing: () => dispatch(cancelEditing()),
	updateProfile: (user) => dispatch(updateProfile(user))
});

const mapStateToProps = (state, ownProps) => {
	const { userProfiles, userAccount } = state;
	const { id } = ownProps.match.params;

	return {
		users: userProfiles.users,
		isEditing: userProfiles.isEditing,
		activeUser: userAccount.activeUser,
		currentUserId: Number(id)
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
