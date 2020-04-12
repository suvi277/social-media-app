import { signInUser, signOutUser } from './userAccount';
import { SIGN_IN, SIGN_OUT, SIGN_UP } from '@app/constants/actionTypes';

describe('User Account Actions', () => {
	it('signInUser should return SIGN_IN action with the passed email and password', () => {
		const mockEmail = 'abc@gmail.com';
		const mockPass = 'sample-pass';

		expect(signInUser(mockEmail, mockPass)).toEqual({
			type: SIGN_IN,
			payload: {
				email: mockEmail,
				password: mockPass
			}
		});
	});

	it('signOutUser should return SIGN_OUT action', () => {
		expect(signOutUser()).toEqual({
			type: SIGN_OUT
		});
	});
});
