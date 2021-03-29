import React from 'react';
import { Provider } from 'react-redux';
import { shallow, mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { ViewProfile, UpdateProfile } from '@app/components/Profile';
import Profile from './Profile';
const mockStore = configureStore();

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

	// describe('when mounted with isEditing false', () => {
	// 	let store, wrapper, mockUser;

	// 	beforeEach(() => {
	// 		mockUser = mockUserData;

	// 		store = mockStore({
	// 			userAccount: {
	// 				signedIn: true,
	// 				activeUser: mockUser
	// 			},
	// 			userProfiles: {
	// 				users: [ mockUser ],
	// 				isEditing: false
	// 			}
	// 		});
	// 		wrapper = mount(
	// 			<Provider store={store}>
	// 				<BrowserRouter>
	// 					<Profile
	// 						match={{
	// 							params: {
	// 								id: 1
	// 							}
	// 						}}
	// 					/>
	// 				</BrowserRouter>
	// 			</Provider>
	// 		);
	// 	});

	// 	it('should render ViewProfile component with activeUser', () => {
	// 		expect(wrapper.find(ViewProfile)).toHaveLength(1);
	// 	});
	// });
	// describe('when mounted with isEditing true', () => {
	// 	let store, wrapper, mockUser;

	// 	beforeEach(() => {
	// 		mockUser = mockUserData;

	// 		store = mockStore({
	// 			userAccount: {
	// 				activeUser: mockUser
	// 			},
	// 			userProfiles: {
	// 				users: [ mockUser ],
	// 				isEditing: true
	// 			}
	// 		});
	// 		wrapper = mount(
	// 			<Provider store={store}>
	// 				<BrowserRouter>
	// 					<Profile
	// 						match={{
	// 							params: {
	// 								id: 1
	// 							}
	// 						}}
	// 					/>
	// 				</BrowserRouter>
	// 			</Provider>
	// 		);
	// 	});

	// 	it('should render UpdateProfile component with activeUser', () => {
	// 		expect(wrapper.find(UpdateProfile)).toHaveLength(1);
	// 	});

	// 	it('should map State to Props', () => {
	// 		const expectedPropKeys = [ 'users', 'isEditing', 'activeUser', 'currentUserId' ];
	// 		const component = wrapper.find('Profile');
	// 		expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
	// 	});
	// });
});
