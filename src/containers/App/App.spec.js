import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import App from './App';
const mockStore = configureStore([]);

describe('App container', () => {
	let store, component;

	beforeEach(() => {
		store = mockStore({
			userAccount: {
				signedIn: false
			}
		});
		component = shallow(
			<Provider store={store}>
				<App />
			</Provider>
		);
	});
	it('should render with given state from Redux store', () => {
		expect(component).toMatchSnapshot();
	});
	it('should dispatch an action on button click', () => {});
});
