import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import UserList from './UserList';
import { UserView } from '@app/components/UserView';
const mockStore = configureStore([]);
const mockUsers = [
	{
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
  },
	{
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
  },{
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
];

describe('UserList container', () => {
	let component;

	it('renders without erros', () => {
		const store = mockStore({
			userAccount: {
				signedIn: false,
				activeUser: {}
			},
			userProfiles: {
				users: []
			}
		});
		component = shallow(
			<Provider store={store}>
				<UserList />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component).toMatchSnapshot();
	});

	describe('UserList mounted with multiple users', () => {
		let store, component;
		beforeEach(() => {
			store = mockStore({
				userAccount: {
					signedIn: false,
					activeUser: mockUsers[0]
				},
				userProfiles: {
					users: mockUsers
				}
			});
			component = mount(
				<Provider store={store}>
					<BrowserRouter>
						<UserList />
					</BrowserRouter>
				</Provider>
			);
		});

		it('should have the activeUser property from the state', () => {
			expect(component.find('UserList').prop('activeUser')).toBe(mockUsers[0]);
		});

		it('should render UserView Componnent for all users except active user', () => {
			const filteredUser = mockUsers.filter((user) => user.id !== mockUsers[0].id);
			filteredUser.forEach((user, index) => {
				expect(component.find(UserView).at(index).props().user).toBe(user);
			});
		});
		it('should render the searchField', () => {
			expect(component.find('TextField')).toHaveLength(1);
			expect(component.find('TextField').prop('placeholder')).toBe('Search by Name');
		});

		it('should render UserView Componnent for the searched users', () => {
			const searchStr = 'first3';
			component.find('input[name="search"]').simulate('change', { target: { value: searchStr } });
			const filteredUserView = component.find(UserView).filterWhere((node) => {
				const { firstName, lastName, email } = node.props().user;
				return (
					firstName.toLowerCase().includes(searchStr) ||
					lastName.toLowerCase().includes(searchStr) ||
					email.toLowerCase().includes(searchStr)
				);
			});
			expect(component.find(UserView)).toHaveLength(filteredUserView.length);
		});
	});
});
