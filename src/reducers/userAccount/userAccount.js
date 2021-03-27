import { SIGN_IN, SIGN_OUT } from '@app/constants/actionTypes';
import { users } from '../mockData/users';

const storage =  JSON.parse(localStorage.getItem("user"))

export const initialState = {
	signedIn: storage.isAuthenticated ? true : false,
	activeUser: storage || {}
};

export const userAccount = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN:
			const { email, password } = action.payload;
			const activeUser = getActiveUser(email, password );
			// Checks the validity of users
			if (activeUser) {
        localStorage.setItem("user", JSON.stringify({...activeUser, isAuthenticated: true}));
        return {
					...state,
					signedIn: true,
					activeUser
				};
      }
      return {
        ...state,
        signedIn: false
      };
		case SIGN_OUT:
      localStorage.removeItem("user");
			return {
				...state,
				signedIn: false
			};
		default:
			return state;
	}
};

const getActiveUser = (email, password) => {
	return users.find((user) => {
		return user.email === email && user.password === password;
	});
};
