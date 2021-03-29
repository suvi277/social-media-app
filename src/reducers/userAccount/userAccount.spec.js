import { userAccount, initialState } from './userAccount';
import { SIGN_IN, SIGN_OUT } from '@app/constants/actionTypes';

describe('User Account Reducer', () => {
	it('should provide initial state', () => {
		expect(userAccount(undefined, {})).toEqual(initialState);
	});

	describe('SIGN_IN', () => {
		it('should return signedIn to true and activeUser to passed email and password', () => {
			const mockUser = {
        id: 1,
        name: {
          title: 'Ms',
          first: 'Suvarna',
          last: 'Mondal'
        },
        email: 'suvi@example.com',
        password: 'suvi@123',
        gender: 'female',
        dob: {
          date: "1993-07-20T09:44:18.674Z",
          age: 26
        },
        registered: {
          date: "2002-05-21T10:59:49.966Z",
          age: 17
        },
        picture: {
          large: "https://media-exp1.licdn.com/dms/image/C4E03AQEdmWit79hS7Q/profile-displayphoto-shrink_400_400/0/1581451654113?e=1622073600&v=beta&t=vP3NOapfSzAsi6XPwwfSN2hkCbEvvAwObuBIeNHXA8c",
        },
        login: {
          username: "suvi@277",
        },
      };
			const state = {
				...initialState
			};

			expect(
				userAccount(state, {
					type: SIGN_IN,
					payload: {
						email: 'suvi@example.com',
						password: 'suvi@123',
						users: [ mockUser ]
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
						password: 'password5',
						users: []
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
});
