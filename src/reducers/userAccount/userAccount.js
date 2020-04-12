import { SIGN_IN, SIGN_OUT } from '@app/constants/actionTypes';

export const initialState = {
	signedIn: false,
	activeUser: {}
};

export const userAccount = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			const { email, password, users } = action.payload;
			const activeUser = getActiveUser(email, password, users);

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
		default:
			return state;
	}
};

const getActiveUser = (email, password, users) => {
	return users.find((user) => {
		return user.email === email && user.password === password;
	});
};
