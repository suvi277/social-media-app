import { updateProfile, editUser, signUpUser } from './users';
import { UPDATE_PROFILE, EDIT_USER, SIGN_UP } from '@app/constants/actionTypes';

describe('User Account Actions', () => {
	it('updateProfile should return UPDATE_PROFILE action with new user passed in the argument', () => {
		const mockUser = {
			firstName: 'First',
			lastName: 'Last',
			email: 'first@gmail.com'
		};
		expect(updateProfile(mockUser)).toEqual({
			type: UPDATE_PROFILE,
			payload: {
				user: mockUser
			}
		});
	});

	it('editUser should return EDIT_USER action', () => {
		expect(editUser()).toEqual({
			type: EDIT_USER
		});
	});

	it('signUpUser should return SIGN_UP action with new user passed in the argument', () => {
		const mockUser = {
			firstName: 'First',
			lastName: 'Last',
			email: 'first@gmail.com'
		};
		expect(signUpUser(mockUser)).toEqual({
			type: SIGN_UP,
			payload: {
				signedUpUser: mockUser
			}
		});
	});
});
