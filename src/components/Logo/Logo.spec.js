import React from 'react';
import { shallow } from 'enzyme';
import { Logo } from './Logo';

describe('Logo Component', () => {
	const wrapper = shallow(<Logo />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	it('should exist h1 tag', () => {
		expect(wrapper.find('img')).toHaveLength(1);
	});
});
