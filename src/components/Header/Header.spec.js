import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

describe('Header Component', () => {
	const props = {
		someProps: 'someprops'
	};
	const wrapper = shallow(<Header {...props} />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exist Logo Component', () => {
		expect(wrapper.find('Logo')).toHaveLength(1);
	});

	it('should exist Header Component', () => {
		expect(wrapper.find('Navigation')).toHaveLength(1);
	});

	it('should render Header Component with Header props', () => {
		const navigation = wrapper.find('Navigation');
		expect(navigation.props().someProps).toBe(props.someProps);
	});
});
