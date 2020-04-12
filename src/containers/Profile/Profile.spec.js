import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ViewProfile, UpdateProfile } from '@app/components/Profile';
import Profile from './Profile';
const mockStore = configureStore();

describe('Profile container', () => {
	it('renders without erros', () => {
		const store = mockStore({
			userProfile: {
				isEditing: false
			}
		});
		const component = shallow(
			<Provider store={store}>
				<Profile />
			</Provider>
		);
	});

	describe('when mounted with isEditing false', () => {
		let store, wrapper, mockUser;

		beforeEach(() => {
			mockUser = {
				id: 1,
				firstName: 'First',
				lastName: 'Last',
				email: 'first@gmail.com'
			};

			store = mockStore({
				userAccount: {
					signedIn: true,
					activeUser: mockUser
				},
				userProfiles: {
					users: [ mockUser ],
					isEditing: false
				}
			});
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<Profile
							match={{
								params: {
									id: 1
								}
							}}
						/>
					</BrowserRouter>
				</Provider>
			);
		});

		it('should render ViewProfile component with activeUser', () => {
			expect(wrapper.find(ViewProfile)).toHaveLength(1);
		});
	});
	describe('when mounted with isEditing true', () => {
		let store, wrapper, mockUser;

		beforeEach(() => {
			mockUser = {
				id: 1,
				firstName: 'First',
				lastName: 'Last',
				email: 'first@gmail.com'
			};

			store = mockStore({
				userAccount: {
					activeUser: mockUser
				},
				userProfiles: {
					users: [ mockUser ],
					isEditing: true
				}
			});
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<Profile
							match={{
								params: {
									id: 1
								}
							}}
						/>
					</BrowserRouter>
				</Provider>
			);
		});

		it('should render UpdateProfile component with activeUser', () => {
			expect(wrapper.find(UpdateProfile)).toHaveLength(1);
		});

		it('should map State to Props', () => {
			const expectedPropKeys = [ 'users', 'isEditing', 'activeUser', 'currentUserId' ];
			const component = wrapper.find('Profile');
			expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
		});
	});
});
