import React from 'react';
import { shallow } from 'enzyme';
import { UpdateProfile } from './UpdateProfile';

describe('UpdateProfile Component', () => {
	const mockUser = {
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'first@gmail.com'
	};
	const wrapper = shallow(<UpdateProfile user={mockUser} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//TODO - ADD TESTCASES
});
