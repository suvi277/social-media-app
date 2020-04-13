import { UPDATE_PROFILE, EDIT_USER, CANCEL_EDIT_USER, SIGN_UP } from '@app/constants/actionTypes';
import { users } from '../mockData/users';

export const initialState = {
	users,
	isSignedUp: false,
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

		case SIGN_UP:
			const { signedUpUser } = action.payload;
			// Create a newUser Object with the payload and adding the new id
			const newUser = { ...signedUpUser, id: generateNewId(state.users) };

			// Add the new user to the list
			return {
				...state,
				isSignedUp: true,
				users: [ ...state.users, newUser ]
			};
		default:
			return state;
	}
};

const generateNewId = (users) => {
	const highestIndex = Math.max.apply(
		Math,
		users.map((user) => {
			return user.id;
		})
	);
	return highestIndex + 1;
};
