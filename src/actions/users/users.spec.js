import { updateProfile, editUser } from './users';
import { UPDATE_PROFILE, EDIT_USER } from '@app/constants/actionTypes';

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
});
