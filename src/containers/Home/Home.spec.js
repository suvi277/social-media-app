import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { UserList } from '@app/containers/UserList';
import { BrowserRouter } from 'react-router-dom';
import { ActiveUserView } from '@app/components/ActiveUserView';
import Home from './Home';
const mockStore = configureStore([]);
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
			const mockUser = mockUserData;

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
			expect(wrapper.find(ActiveUserView).props().user).toEqual(component.user);
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
