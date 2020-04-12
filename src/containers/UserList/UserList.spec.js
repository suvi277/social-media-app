import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import UserList from './UserList';
import { UserView } from '@app/components/UserView';
const mockStore = configureStore([]);

describe('UserList container', () => {
	let store, component;

	beforeEach(() => {
		const mockUser = {
			id: 1,
			firstName: 'First',
			lastName: 'Last',
			email: 'first@gmail.com'
		};
		store = mockStore({
			userAccount: {
				signedIn: false,
				activeUser: {
					id: 3,
					firstName: 'First3',
					lastName: 'Last3',
					email: 'first3@gmail.com'
				}
			},
			userProfiles: {
				users: [ mockUser ]
			}
		});
	});

	it('renders without erros', () => {
		component = shallow(
			<Provider store={store}>
				<UserList />
			</Provider>
		);
	});

	it('should render with given state from Redux store', () => {
		expect(component).toMatchSnapshot();
	});

	it('should have the UserView component', () => {
		expect(component.dive().find(UserView)).toBeTruthy();
	});
});
