import React from 'react';
import { shallow } from 'enzyme';
import { AuthForm } from './AuthForm';

describe('AuthForm Component', () => {
	const wrapper = shallow(
		<AuthForm title="Sign In">
			<div>Its children</div>
		</AuthForm>
	);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should render a h2 tag', () => {
		expect(wrapper.find('h2')).toHaveLength(1);
	});
	it('should show the ', () => {
		expect(wrapper.find('h2').text()).toBe('Sign In');
	});
});
