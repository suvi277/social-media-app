import React from 'react';
import { shallow } from 'enzyme';
import { UserView } from './UserView';

describe('UserView Component', () => {
	const mockUser = {
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'first@gmail.com'
	};
	const wrapper = shallow(<UserView user={mockUser} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	//TODO - ADD TESTCASES
});
