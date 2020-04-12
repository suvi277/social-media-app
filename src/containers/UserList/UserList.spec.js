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
		firstName: 'First',
		lastName: 'Last',
		email: 'first@gmail.com'
	},
	{
		id: 2,
		firstName: 'First3',
		lastName: 'Last',
		email: 'first3.last2@gmail.com'
	},
	{
		id: 3,
		firstName: 'First3',
		lastName: 'Last3',
		email: 'first3@gmail.com'
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

		it('should have the activeUser prroperty from the state', () => {
			expect(component.find('UserList').prop('activeUser')).toBe(mockUsers[0]);
		});

		it('should render UserView Componnent for all users except active user', () => {
			const filteredUser = mockUsers.filter((user) => user.id !== mockUsers[0].id);
			filteredUser.forEach((user, index) => {
				expect(component.find(UserView).at(index).props().id).toBe(user.id);
			});
		});
		it('should render the searchField', () => {
			expect(component.find('TextField')).toHaveLength(1);
			expect(component.find('TextField').prop('label')).toBe('Search');
		});

		it('should render UserView Componnent for the searched users', () => {
			const searchStr = 'first3';
			component.find('input[name="search"]').simulate('change', { target: { value: searchStr } });
			const filteredUserView = component.find(UserView).filterWhere((node) => {
				const { firstName, lastName, email } = node.props();
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
