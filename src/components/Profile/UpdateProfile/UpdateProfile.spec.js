import React from 'react';
import { shallow } from 'enzyme';
import { UpdateProfile } from './UpdateProfile';

describe('UpdateProfile Component', () => {
	const wrapper = shallow(<UpdateProfile />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//To Complet Test Cases
});
