import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { createMockStore } from 'redux-test-utils';
import SignUp from './SignUp';
import { AuthForm } from '@app/components/UI';

describe('SignUp container', () => {
	it('renders without erros', () => {
		const store = createMockStore({});
		const component = shallow(
			<Provider store={store}>
				<SignUp />
			</Provider>
		);
	});

	describe('when mounted with signed in', () => {
		let store, wrapper;

		beforeEach(() => {
			store = createMockStore({
				userAccount: {
					signedIn: true
				}
			});
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<SignUp />
					</BrowserRouter>
				</Provider>
			);
		});
	});

	describe('when mounted with not signed in', () => {
		let store, wrapper, component;

		beforeEach(() => {
			const mockUser = {
				id: 1,
				firstName: 'First',
				lastName: 'Last',
				password: 'acd',
				email: 'first@gmail.com'
			};
			store = createMockStore({
				userAccount: {
					signedIn: false,
					users: [ mockUser ]
				}
			});
			store.dispatch = jest.fn();
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<SignUp />
					</BrowserRouter>
				</Provider>
			);
			component = wrapper.find('SignUp');
		});

		it('should render AuthForm component with activeUser', () => {
			expect(component.find(AuthForm)).toHaveLength(1);
		});

		it('should render two TextField component with correct field', () => {
			expect(component.find('TextField')).toHaveLength(4);
			expect(component.find('TextField').at(0).props().name).toEqual('firstName');
			expect(component.find('TextField').at(1).props().name).toEqual('lastName');
			expect(component.find('TextField').at(2).props().name).toEqual('email');
			expect(component.find('TextField').at(3).props().name).toEqual('password');
		});

		it('should map State to Props', () => {
			const expectedPropKeys = [ 'isSignedIn', 'signUpUser' ];
			expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
		});

		it('should dispatches SIGN UP Action on submit with all the fields', () => {
			component
				.find('input[name="firstName"]')
				.simulate('change', { target: { name: 'firstName', value: 'First Name' } });
			component
				.find('input[name="lastName"]')
				.simulate('change', { target: { name: 'lastName', value: 'Last Name' } });
			component
				.find('input[name="email"]')
				.simulate('change', { target: { name: 'email', value: 'first6@gmail.com' } });
			component
				.find('input[name="password"]')
				.simulate('change', { target: { name: 'password', value: 'acfd' } });

			component.find('form').simulate('submit');

			expect(store.dispatch).toHaveBeenCalled();
		});

		it('should not dispatches SIGN UP Action on submit with no input', () => {
			component.find('form').simulate('submit');
			expect(store.dispatch).not.toHaveBeenCalled();
		});
	});
});
