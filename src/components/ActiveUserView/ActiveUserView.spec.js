import React from 'react';
import { shallow } from 'enzyme';
import { ActiveUserView } from './ActiveUserView';

describe('ActiveUserView Component', () => {
	const mockUser = {
		id: 1,
		firstName: 'First',
		lastName: 'Last',
		email: 'first@gmail.com'
	};
	const wrapper = shallow(<ActiveUserView {...mockUser} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should render a title className div', () => {
		expect(wrapper.find('.title')).toHaveLength(1);
	});
	it('should show the firstName and lastName in the title', () => {
		expect(wrapper.find('.title').text()).toBe(`${mockUser.firstName} ${mockUser.lastName}`);
	});
	it('should show the email in the email-id', () => {
		expect(wrapper.find('.email-id').text()).toBe(mockUser.email);
	});
});
