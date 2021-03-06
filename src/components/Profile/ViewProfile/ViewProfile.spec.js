import React from 'react';
import { shallow } from 'enzyme';
import { ViewProfile } from './ViewProfile';

describe('ViewProfile Component', () => {
	const mockUser = {
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'first@gmail.com'
	};
	const wrapper = shallow(<ViewProfile user={mockUser} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//TODO - ADD TESTCASES
});
