import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils';
import SignIn from './SignIn';
import { AuthForm } from '@app/components/UI';

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
			mockUser = {
				id: 1,
				firstName: 'First',
				lastName: 'Last',
				password: 'acd',
				email: 'first@gmail.com'
			};
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
				.simulate('change', { target: { name: 'email', value: 'first@gmail.com' } });
			component.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'acd' } });
			component.find('form').simulate('submit');
			expect(store.dispatch).toHaveBeenCalledWith({
				payload: { email: 'first@gmail.com', password: 'acd', users: [ mockUser ] },
				type: 'SIGN-IN'
			});
		});

		it('should not dispatches SIGN IN Action on submit with only email and not password', () => {
			component
				.find('input[name="email"]')
				.simulate('change', { target: { name: 'email', value: 'first@gmail.com', users: [ mockUser ] } });

			component.find('form').simulate('submit');
			expect(store.dispatch).not.toHaveBeenCalled();
		});

		it('should not dispatches SIGN IN Action on submit with only email and not password', () => {
			component.find('input[name="password"]').simulate('change', { target: { name: 'password', value: 'acd' } });
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
