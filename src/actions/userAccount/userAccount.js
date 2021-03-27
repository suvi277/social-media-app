import { SIGN_IN, SIGN_OUT } from '@app/constants/actionTypes';
import { history } from '@app/store';

/**
 * Sign in user 
 */
export function signInUser(email, password) {
	history.push('/');
	return {
		type: SIGN_IN,
		payload: {
			email,
			password,
		}
	};
}

/**
 * Sign out user 
 */
export function signOutUser() {
	return {
		type: SIGN_OUT
	};
}
