import { userProfiles, initialState } from './users';
import { UPDATE_PROFILE, EDIT_USER, SIGN_UP } from '@app/constants/actionTypes';

describe('Users Reducer', () => {
	it('should provide initial state', () => {
		expect(userProfiles(undefined, {})).toEqual(initialState);
	});

	describe('UPDATE_PROFILE', () => {
		it('should update the changed user details to correct user ', () => {
			const mockUser = {
        name: {
          title: 'Ms',
          first: 'First',
				  last: 'Last',
        },
				email: 'first@gmail.com',
        login: {
          username: "suvi@277",
        },
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

	describe('SIGN_UP', () => {
		it('should return the updated list of users', () => {
			const mockUser = {
				email: 'flast@example.com',
				firstName: 'First',
				lastName: 'LastName',
				password: 'pass'
			};
			expect(
				userProfiles(initialState, {
					type: SIGN_UP,
					payload: { signedUpUser: mockUser }
				})
			).toEqual({
				...initialState,
				isSignedUp: true,
				users: [ ...initialState.users, { ...mockUser, id: 2 } ]
			});
		});
	});
});
