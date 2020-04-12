import { UPDATE_PROFILE, EDIT_USER, CANCEL_EDIT_USER } from '@app/constants/actionTypes';
import { users } from '../mockData/users';

export const initialState = {
	users,
	isEditing: false
};

export const userProfiles = (state = initialState, action) => {
	switch (action.type) {
		// Update the user to current user lists
		case UPDATE_PROFILE:
			const { user } = action.payload;
			let updatedUsers = [ ...state.users ];

			const currentIndex = updatedUsers.findIndex(({ id }) => {
				return id === user.id;
			});

			updatedUsers[currentIndex] = { ...updatedUsers[currentIndex], ...user };

			return {
				...state,
				isEditing: false,
				users: updatedUsers
			};
		// Edit the user and set isEding to true
		case EDIT_USER:
			return {
				...state,
				isEditing: true
			};

		// set isEding to false
		case CANCEL_EDIT_USER:
			return {
				...state,
				isEditing: false
			};
		default:
			return state;
	}
};
