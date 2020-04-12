import React from 'react';
import { shallow } from 'enzyme';
import { ViewProfile } from './ViewProfile';

describe('ViewProfile Component', () => {
	const wrapper = shallow(<ViewProfile />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//To Complet Test Cases
});
