import { userProfiles, initialState } from './users';
import { UPDATE_PROFILE, EDIT_USER } from '@app/constants/actionTypes';

describe('Users Reducer', () => {
	it('should provide initial state', () => {
		expect(userProfiles(undefined, {})).toEqual(initialState);
	});

	describe('UPDATE_PROFILE', () => {
		it('should update the changed user details to correct user ', () => {
			const mockUser = {
				id: 1,
				firstName: 'First',
				lastName: 'Last',
				email: 'first@gmail.com'
			};
			const userInfo = userProfiles(initialState, {
				type: UPDATE_PROFILE,
				payload: {
					user: mockUser
				}
			});
			// Checking the 0 the index as id given as '1'
			expect(userInfo.users[0].firstName).toEqual(mockUser.firstName);
		});
	});

	describe('EDIT_USER', () => {
		it('should change direction SOUTH to EAST', () => {
			expect(
				userProfiles(initialState, {
					type: EDIT_USER
				})
			).toEqual({
				...initialState,
				isEditing: true
			});
		});
	});
});
