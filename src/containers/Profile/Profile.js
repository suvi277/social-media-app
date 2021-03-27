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
				users.find((user) => user.login.username === currentUserId)
			);
		},
		[ users, currentUserId ]
	);

	return (
		<Fragment>
      { currentUser &&
        <div>
          <h4>Profile Details</h4>
          {
            isEditing ? (
            <UpdateProfile user={currentUser} updateProfile={updateProfile} cancelEditing={cancelEditing} />
          ) : (
            <ViewProfile user={currentUser}>
              {activeUser.id === currentUser.id && (
                <Button type="button" label="Edit Profile" className="btn-primary mt-4" buttonClicked={editUser} />
              )}
            </ViewProfile>
          )
          }
        </div>
      }
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
		currentUserId: id
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
