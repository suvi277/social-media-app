import { userAccount, initialState } from './userAccount';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '@app/constants/actionTypes';

describe('User Account Reducer', () => {
	it('should provide initial state', () => {
		expect(userAccount(undefined, {})).toEqual(initialState);
	});

	describe('SIGN_IN', () => {
		it('should return signedIn to true and activeUser to passed email and password', () => {
			const mockUser = {
				id: 2,
				email: 'fname2@example.com',
				firstName: 'FirstName2',
				lastName: 'LastName2',
				password: 'password2'
			};
			const state = {
				...initialState,
				users: [ mockUser ]
			};

			expect(
				userAccount(state, {
					type: SIGN_IN,
					payload: {
						email: 'fname2@example.com',
						password: 'password2'
					}
				})
			).toEqual({
				...state,
				signedIn: true,
				activeUser: mockUser
			});
		});

		it('should return signedIn to false with invalid emailId and password', () => {
			expect(
				userAccount(initialState, {
					type: SIGN_IN,
					payload: {
						email: 'fname2@example.com',
						password: 'password5'
					}
				})
			).toEqual({
				...initialState,
				signedIn: false
			});
		});
	});

	describe('SIGN_OUT', () => {
		it('should return signedIn to false', () => {
			expect(
				userAccount(initialState, {
					type: SIGN_OUT
				})
			).toEqual({
				...initialState,
				signedIn: false
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
				userAccount(initialState, {
					type: SIGN_UP,
					payload: { user: mockUser }
				})
			).toEqual({
				...initialState,
				users: [ ...initialState.users, { ...mockUser, id: 4 } ]
			});
		});
	});
});
