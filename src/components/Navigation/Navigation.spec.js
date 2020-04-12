import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';
import { Navigation } from './Navigation';

describe('Navigation Component', () => {
	const signOutUser = jest.fn();

	const wrapper = shallow(<Navigation isAuthenticated={false} signOutUser={signOutUser} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exist NavLink Component', () => {
		expect(wrapper.exists(NavLink)).toBeTruthy();
	});

	describe('when not Authenticated', () => {
		const signOutUser = jest.fn();

		const wrapper = shallow(<Navigation isAuthenticated={false} signOutUser={signOutUser} />);

		it('should render 1 nav-item tag', () => {
			expect(wrapper.find('.nav-item')).toHaveLength(1);
		});
	});

	describe('when Authenticated', () => {
		const signOutUser = jest.fn();

		const wrapper = shallow(<Navigation isAuthenticated={true} signOutUser={signOutUser} />);

		it('should render two nav-item tag', () => {
			expect(wrapper.find('.nav-item')).toHaveLength(2);
		});

		it('should not dispatch signOutUser action if other nav-item is clicked', () => {
			wrapper.find('.nav-item').not('.sign-out').simulate('click');
			expect(signOutUser).not.toHaveBeenCalled();
		});

		it('should dispatch signOutUser action if sign out is clicked', () => {
			wrapper.find('.sign-out').simulate('click');
			expect(signOutUser).toHaveBeenCalled();
		});
	});
});
