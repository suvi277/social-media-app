import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { UserList } from '@app/containers/UserList';
import { BrowserRouter } from 'react-router-dom';
import { ActiveUserView } from '@app/components/ActiveUserView';
import Home from './Home';
const mockStore = configureStore([]);

describe('Home container', () => {
	it('renders without erros', () => {
		const store = mockStore({
			userAccount: {
				signedIn: false
			}
		});
		const component = shallow(
			<Provider store={store}>
				<UserList />
			</Provider>
		);
	});

	describe('when mounted', () => {
		let store, wrapper;

		beforeEach(() => {
			const mockUser = {
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
					users: []
				}
			});
			wrapper = mount(
				<Provider store={store}>
					<BrowserRouter>
						<Home />
					</BrowserRouter>
				</Provider>
			);
		});

		it('should render ActiveUserView component with activeUser', () => {
			expect(wrapper.find(ActiveUserView)).toHaveLength(1);
			const component = wrapper.find('Home').props();
			expect(wrapper.find(ActiveUserView).props()).toEqual(component.user);
		});

		it('should render UserList component', () => {
			expect(wrapper.find(UserList)).toHaveLength(1);
		});

		it('should map state to props', () => {
			const expectedPropKeys = [ 'user', 'dispatch' ];
			const component = wrapper.find('Home');
			expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
		});
	});
});
