import { UPDATE_PROFILE, EDIT_USER, CANCEL_EDIT_USER, SIGN_UP, REQUEST_USERS, LOADED_USERS, REJECTED_USERS } from '@app/constants/actionTypes';
import { users } from '../mockData/users';

export const initialState = {
  status: 'init',
  users: users,
	isSignedUp: false,
	isEditing: false
};

export const userProfiles = (state = initialState, action) => {
	switch (action.type) {
    // Fetch the user lists
    case REQUEST_USERS:
        return { ...state, status: 'loading' };
    // Load the user lists
    case LOADED_USERS:
        return {
            ...state,
            users: [...state.users, ...action.payload],
            status: 'loaded'
        };
    // Error on fetching the user lists
    case REJECTED_USERS:
        return { ...state, error: action.payload, status: 'error' };
		// Update the user to current user lists
		case UPDATE_PROFILE:
			const { user } = action.payload;
			let updatedUsers = [ ...state.users ];

			const currentIndex = updatedUsers.findIndex(({ login }) => {
				return login.username === user.login.username;
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
		users.map((user) => user.id)
	);
	return highestIndex + 1;
};
