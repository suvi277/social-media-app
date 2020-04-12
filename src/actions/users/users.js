import { UPDATE_PROFILE, EDIT_USER, CANCEL_EDIT_USER } from '@app/constants/actionTypes';

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
