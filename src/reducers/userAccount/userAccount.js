import { SIGN_IN, SIGN_OUT, SIGN_UP } from '@app/constants/actionTypes';
import { users } from '../mockData/users';

export const initialState = {
	signedIn: false,
	users,
	activeUser: {}
};

export const userAccount = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			const { email, password } = action.payload;
			const activeUser = getActiveUser(email, password, state.users);

			// Checks the validity of users
			if (!activeUser) {
				return {
					...state,
					signedIn: false
				};
			} else {
				return {
					...state,
					signedIn: true,
					activeUser
				};
			}
		case SIGN_OUT:
			return {
				...state,
				signedIn: false
			};
		case SIGN_UP:
			const { user } = action.payload;
			// Create a newUser Object with the payload and adding the new id
			const newUser = { ...user, id: generateNewId(state.users) };

			// Add the new user to the list
			return {
				...state,
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

const getActiveUser = (email, password, users) => {
	return users.find((user) => {
		return user.email === email && user.password === password;
	});
};
