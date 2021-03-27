import { REQUEST_USERS, LOADED_USERS, REJECTED_USERS, UPDATE_PROFILE, EDIT_USER, CANCEL_EDIT_USER, SIGN_UP } from '@app/constants/actionTypes';
import { history } from '@app/store';

/**
 * users requested
 */

export const usersRequested = (value) => {
	return {
    type: REQUEST_USERS,
    value
	};
};

/**
 * users loaded
 */

export const usersLoaded = (payload) => {
	return {
		type: LOADED_USERS,
		payload
	};
};

/**
 * users rejected
 */

export const usersRejected = (error) => {
	return {
		type: REJECTED_USERS,
		error
	};
};

/**
 * Update user info
 */
export function updateProfile(user) {
	return {
		type: UPDATE_PROFILE,
		payload: {
			user
		}
	};
}

/**
 * Edit user info
 */
export function editUser(user) {
	return {
		type: EDIT_USER
	};
}

/**
 * Cancel Editing
 */
export function cancelEditing(user) {
	return {
		type: CANCEL_EDIT_USER
	};
}

/**
 * Sign Up user 
 */
export function signUpUser(signedUpUser) {
	history.push('/sign-in');
	return {
		type: SIGN_UP,
		payload: {
			signedUpUser
		}
	};
}