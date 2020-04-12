import React from 'react';
import { shallow } from 'enzyme';
import { UserView } from './UserView';

describe('UserView Component', () => {
	const wrapper = shallow(<UserView />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//To Complet Test Cases
});
