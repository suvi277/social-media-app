import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils';
import SignIn from './SignIn';
import { AuthForm } from '@app/components/UI';
const mockUserData = {
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
}

describe('SignIn container', () => {
	it('renders without erros', () => {
		const store = createMockStore({});
		const component = shallow(
			<Provider store={store}>
				<SignIn />
			</Provider>
		);
	});

	describe('when mounted with signed in', () => {
		let store, wrapper;

		beforeEach(() => {
			store = createMockStore({
				userAccount: {
					signedIn: true
				},
				userProfiles: {
					users: []
				}
			});
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<SignIn />
					</BrowserRouter>
				</Provider>
			);
		});

		it('should not render AuthForm component', () => {
			expect(wrapper.find(AuthForm)).toHaveLength(0);
		});
	});

	describe('when mounted with not signed in', () => {
		let store, wrapper, component, mockUser;

		beforeEach(() => {
			mockUser = mockUserData;
			store = createMockStore({
				userAccount: {
					signedIn: false
				},
				userProfiles: {
					users: [ mockUser ]
				}
			});
			store.dispatch = jest.fn();
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<SignIn />
					</BrowserRouter>
				</Provider>
			);
			component = wrapper.find('SignIn');
		});

		it('should render AuthForm component with activeUser', () => {
			expect(wrapper.find(AuthForm)).toHaveLength(1);
		});

		it('should render two TextField component with correct field', () => {
			expect(wrapper.find('TextField')).toHaveLength(2);
			expect(wrapper.find('TextField').first().props().name).toEqual('email');
			expect(wrapper.find('TextField').last().props().name).toEqual('password');
		});

		it('should map State to Props', () => {
			const expectedPropKeys = [ 'isSignedIn', 'signInUser', 'users' ];
			expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
		});

		it('should dispatches SIGN IN Action on submit with both email and password', () => {
			component
				.find('input[name="email"]')
				.simulate('change', { target: { name: 'email', value: 'suvi@example.com' } });
			component.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'suvi@123' } });
			component.find('form').simulate('submit');
			expect(store.dispatch).toHaveBeenCalled();
		});

		it('should not dispatches SIGN IN Action on submit with only email and not password', () => {
			component
				.find('input[name="email"]')
				.simulate('change', { target: { name: 'email', value: 'suvi@example.com', users: [ mockUser ] } });

			component.find('form').simulate('submit');
			expect(store.dispatch).not.toHaveBeenCalled();
		});

		it('should not dispatches SIGN IN Action on submit with not email and only password', () => {
			component.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'suvi@123' } });
			component.find('form').simulate('submit');

			component.find('form').simulate('submit');
			expect(store.dispatch).not.toHaveBeenCalled();
		});

		it('should not dispatches SIGN IN Action on submit', () => {
			component.find('form').simulate('submit');
			expect(store.dispatch).not.toHaveBeenCalled();
		});
	});
});
